"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const merchants = [
      {
        name: "Warung Nasi Goreng Spesial",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Depot Mie Goreng Enak",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Mie Lendir Maknyus",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Bakso Malang Mantap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Batagor Bandung Asli",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Cendol Segar",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Teler Juara",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Soto Bandoeng Sedap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Bakso Tahu Si Om",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Mie Kocok Bandung Lezat",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Bandrek Hangat Pak Dedi",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Kopi Susu Kekinian",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Serabi Bandung Mang Encep",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Pisang Molen Mbah Min",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Lapis Legit Ciamik",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Kue Apem Simbok",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Rujak Fresh",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Salad Buah Segar",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Asinan Buah Segar",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Roti Bakar Malam",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Crepes Delight",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Seblak Seuhah Mantap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Telor Gulung Bang Udin",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Cireng Racing Juara",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Doger Betawi",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Kelapa Murni",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Fried Chicken Crispy",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Cuanki Serayu Enak",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Bebek Bakar Asli",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Sop Iga Sapi Sedap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Sate Madura Juara",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Nasi Uduk Kampung",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Tebu Murni",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Jus Segar Bu Broto",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Risol Mayo Renyah",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Gehu Pedas Mantap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Pisang Crispy Lezat",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Odading Gembul",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Dadar Gulung Simbah",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Kue Sus Enak",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Donat Mini Manis",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Durian Segar",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Mie Ayam Favorit",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Cuanki Serayu Enak",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Bebek Bakar Asli",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Sop Iga Sapi Sedap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Sate Madura Juara",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Nasi Uduk Kampung",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Tebu Murni",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Semangka Potong Segar",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Kulkul Segar",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Kacang Rebus Enak",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Teh Mantul",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Bubur Ayam Hangat",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Tahu Gejrot Pak Slamet",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Makaroni Basah Spesial",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Roti Canai Enak",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Campur Juara",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Pempek Palembang Asli",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Ayam Penyet Juara",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Sate Padang Asli",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Tahu Bulat Garing",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Krim Mochi Lezat",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Nasi Liwet Lezat",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Cendol Dawet Segar",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Ayam Geprek Mantap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Sop Buntut Lezat",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Nasi Kuning Favorit",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Ketoprak Asli Betawi",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Rendang Padang Juara",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Cincau Segar",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Pisang Goreng Manis",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Sop Buntut Lezat",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Nasi Kuning Favorit",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Ketoprak Asli Betawi",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Lontong Sayur Lezat",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Tahu Sumedang Spesial",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Rawon Jawa Asli",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Martabak Manis Spesial",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Martabak Telur Juara",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Serabi Bandung Mang Encep",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Pisang Molen Mbah Min",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Lapis Legit Ciamik",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Kue Apem Simbok",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Jeruk Nipis Segar",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Dimsum Enak",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Susu Jahe Hangat",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Bakwan Jagung Gurih",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Serabi Bandung Favorit",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Bakso Malang Sedap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Es Doger Spesial",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Rendang Padang Asli",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Soto Betawi Mantap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Nasi Goreng Kampung",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Capcay Kuah Sedap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Mie Aceh Juara",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Ikan Bakar Jimbaran",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Karedok Segar",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Sayur Lodeh Mantap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Pisang Goreng Keju Lezat",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Coto Makassar Enak",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
      {
        name: "Ayam Taliwang Sedap",
        rating: parseFloat((Math.random() * 5).toFixed(1)),
      },
    ];

    const getRandomTime = (start, end) => {
      const startHour = parseInt(start.split(":")[0], 10);
      const endHour = parseInt(end.split(":")[0], 10);
      const randomHour =
        Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
      const randomMinute = Math.floor(Math.random() * 60);
      return `${String(randomHour).padStart(2, "0")}:${String(
        randomMinute
      ).padStart(2, "0")}:00`;
    };

    const getRandomUserId = () => Math.floor(Math.random() * 5) + 1;

    const merchantRecords = merchants.map((merchant) => ({
      user_id: getRandomUserId(),
      business_name: merchant.name,
      average_rating: merchant.rating,
      status: Math.random() > 0.5 ? "buka" : "tutup",
      opening_time: getRandomTime("07:00", "10:00"),
      closing_time: getRandomTime("17:00", "22:00"),
      created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
      updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
    }));

    return queryInterface.bulkInsert("Merchants", merchantRecords);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Merchants", null, {});
  },
};
