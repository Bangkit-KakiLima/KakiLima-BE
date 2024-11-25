const cron = require("node-cron");
const axios = require("axios");
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function fetchMerchantIds() {
  try {
    const result = await pool.query('SELECT merchant_id FROM "Merchants";');
    return result.rows.map((row) => row.merchant_id);
  } catch (error) {
    console.error("Error fetching merchant IDs:", error);
    return [];
  }
}

function generateRandomCoordinates() {
  const centerLat = -6.9175;
  const centerLng = 107.6191;
  const radius = 0.1; // ~10 km radius dr pusat bndung

  const latOffset = (Math.random() - 0.5) * 2 * radius;
  const lngOffset = (Math.random() - 0.5) * 2 * radius / Math.cos(centerLat * Math.PI / 180);

  const latitude = centerLat + latOffset;
  const longitude = centerLng + lngOffset;

  return { latitude, longitude };
}

async function updateLocation(id, latitude, longitude) {
  try {
    const apiUrl = `http://13.229.216.9:80/api/locations/${id}`;
    const response = await axios.put(
      apiUrl,
      {
        latitude: latitude,
        longitude: longitude,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(`Updated ID ${id} to Latitude: ${latitude}, Longitude: ${longitude}`);
    console.log("API Response:", response.data);
  } catch (error) {
    console.error(`Error updating location for ID ${id}:`, error.message);
  }
}


function startCronJob() {
  cron.schedule("*/30 * * * *", async () => {
    console.log("Cron job started at:", new Date().toISOString());
    const merchantIds = await fetchMerchantIds();
    if (merchantIds.length === 0) {
      console.log("No merchant IDs found.");
      return;
    }
    const randomIndex = Math.floor(Math.random() * merchantIds.length);
    const selectedId = merchantIds[randomIndex];
    const { latitude, longitude } = generateRandomCoordinates();
    await updateLocation(selectedId, latitude, longitude);
    console.log("Cron job completed at:", new Date().toISOString());
  });
  console.log("Cron job scheduled.");
}

module.exports = { startCronJob };
