
# Live Location Tracking API Documentation

## Base URL:
```
http://54.255.167.20:80
```

---

## 1. Send Merchant Location

### Endpoint: `/api/locations`
**Method**: `POST`

**Description**: Endpoint ini digunakan untuk mengirimkan data lokasi dari merchant yang pertama kali mendaftar. Data Merchant harus sudah ada terlebih dahulu

### Request Body:
- **merchant_id**: (string) id_merchant yang mengirimkan data lokasi.
- **latitude**: (text) Latitude lokasi merchant.
- **longitude**: (text) Longitude lokasi merchant.

### Example Request:
```json
{
  "merchant_id": "dcd5fd71-f596-4262-91b4-f10c06c61d13",
  "latitude": 12.909312,
  "longitude": 33.2342311
}
```

### Response:
- **201 Created**: Jika lokasi berhasil disimpan.
- **400 Bad Request**: Jika ada kesalahan dalam data yang dikirimkan.
- **500 Internal Server Error**: Jika terjadi kesalahan di server saat memproses data.

**Example Response**:
```json
{
  "id": 1,
  "merchant_id": "10e40d33-3023-43c1-8cc7-71806d513010",
  "latitude": "211.729121",
  "longitude": "-184.9301021",
  "createdAt": "2024-11-25T04:58:35.062Z",
  "updatedAt": "2024-11-25T08:25:55.202Z"
}
```

---

## 2. Get Merchant Location by merchant_id

### Endpoint: `/api/locations/{merchant_id}`
**Method**: `GET`

**Description**: Endpoint ini digunakan untuk mendapatkan lokasi terkini dari merchant berdasarkan **merchant_id**.

### Parameters:
- **merchant_id**: (string) merchant_id yang ingin diambil lokasinya.

### Example Request:
```bash
GET /api/locations/10e40d33-3023-43c1-8cc7-71806d513010
```

### Response:
- **200 OK**: Jika lokasi ditemukan, respons akan berisi data lokasi pengguna.
- **404 Not Found**: Jika lokasi untuk **merchant_id** tersebut tidak ditemukan.

**Example Response**:
```json
{
  "id": 1,
  "merchant_id": "10e40d33-3023-43c1-8cc7-71806d513010",
  "latitude": "-19.291021",
  "longitude": "10.0219212",
  "createdAt": "2024-11-25T04:58:35.062Z",
  "updatedAt": "2024-11-25T04:59:13.986Z",
  "merchant": {
    "id": 2,
    "merchant_id": "10e40d33-3023-43c1-8cc7-71806d513010",
    "business_name": "Usus Mantap",
    "average_rating": 3.8,
    "status": "active",
    "createdAt": "2024-11-25T04:49:50.324Z",
    "updatedAt": "2024-11-25T04:49:50.324Z"
  }
}
```

---

## 3. Get All Locations

### Endpoint: `/api/locations/`
**Method**: `GET`

**Description**: Endpoint ini digunakan untuk mengambil semua data lokasi dari seluruh merchants yang terdaftar dalam sistem.

### Example Request:
```bash
GET /api/locations/
```

### Response:
- **200 OK**: Jika lokasi ditemukan, respons akan berisi seluruh data lokasi pengguna.
- **404 Not Found**: Jika tidak ada lokasi yang ditemukan dalam sistem.

**Example Response**:
```json
[
  {
    "id": 1,
    "merchant_id": "10e40d33-3023-43c1-8cc7-71806d513010",
    "latitude": "-19.291021",
    "longitude": "10.0219212",
    "createdAt": "2024-11-25T04:58:35.062Z",
    "updatedAt": "2024-11-25T04:59:13.986Z",
    "merchant": {
      "id": 2,
      "merchant_id": "10e40d33-3023-43c1-8cc7-71806d513010",
      "business_name": "Usus Mantap",
      "average_rating": 3.8,
      "status": "active",
      "createdAt": "2024-11-25T04:49:50.324Z",
      "updatedAt": "2024-11-25T04:49:50.324Z"
    }
  },
  {
    "id": 2,
    "merchant_id": "dcd5fd71-f596-4262-91b4-f10c06c61d13",
    "latitude": "-69.291021",
    "longitude": "117.0219212",
    "createdAt": "2024-11-25T05:59:55.654Z",
    "updatedAt": "2024-11-25T05:59:55.654Z",
    "merchant": {
      "id": 1,
      "merchant_id": "dcd5fd71-f596-4262-91b4-f10c06c61d13",
      "business_name": "Bakso Mang",
      "average_rating": 4.5,
      "status": "active",
      "createdAt": "2024-11-25T04:49:50.324Z",
      "updatedAt": "2024-11-25T04:49:50.324Z"
    }
  }
]
```

---

## 4. Update Merchant Location

### Endpoint: `/api/locations/{merchant_id}`
**Method**: `PUT`

**Description**: Endpoint ini digunakan untuk mengupdate data lokasi terkini dari pengguna. Data Lokasi harus ada terlebih dahulu

### Request Body:
- **merchant_id**: (string) merchant_id yang mengirimkan data lokasi.
- **latitude**: (text) Latitude lokasi merchant.
- **longitude**: (text) Longitude lokasi merchant.

### Example Request:

```bash
PUT /api/locations/10e40d33-3023-43c1-8cc7-71806d513010
```
```json
{
  "latitude": -110.297911241,
  "longitude": 16.23131
}
```

### Response:
- **200 OK**: Jika lokasi berhasil disimpan.
- **400 Bad Request**: Jika ada kesalahan dalam data yang dikirimkan.
- **500 Internal Server Error**: Jika terjadi kesalahan di server saat memproses data.

**Example Response**:
```json
{
  "id": 1,
  "merchant_id": "10e40d33-3023-43c1-8cc7-71806d513010",
  "latitude": "211.729121",
  "longitude": "-184.9301021",
  "createdAt": "2024-11-25T04:58:35.062Z",
  "updatedAt": "2024-11-25T08:25:55.202Z"
}
```

---

## Error Codes

Berikut adalah daftar beberapa error yang mungkin ditemui:

- **400 Bad Request**: Kesalahan dalam permintaan (misalnya data yang tidak valid atau kurang).
- **404 Not Found**: Endpoint atau data tidak ditemukan.
- **500 Internal Server Error**: Terjadi kesalahan di server.

---

## Screenshoot

Berikut contoh testing yang dilakukan di thunder-client:

- **Get All Data** 
![image_2024-11-25_15-03-07](https://github.com/user-attachments/assets/10dc8519-0ad4-4a72-a872-ae9a00e4c843)

- **Get Data by Merchant ID**
![image_2024-11-25_15-03-35](https://github.com/user-attachments/assets/d2f60e8c-d738-4638-804e-f7a5082aef8a)

- **POST Data to DB**
![image_2024-11-25_15-24-49](https://github.com/user-attachments/assets/decb568f-1cd8-435d-b365-97d055e2e49f)

- **Update Data**
![image_2024-11-25_15-26-17](https://github.com/user-attachments/assets/4f9ba6d8-be56-4a7c-8e59-706c20a417b0)

