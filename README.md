# Backend KakiLima

Backend untuk aplikasi tracking penjual kaki lima keliling. Proyek ini dikembangkan menggunakan Node.js dengan arsitektur RESTful API dan menggunakan PostgreSQL sebagai database. Backend ini mendukung fitur utama seperti manajemen lokasi, pemesanan, dan pengelolaan data pedagang.

## Daftar Isi

- [Fitur](#fitur)
- [Persyaratan Sistem](#persyaratan-sistem)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Struktur Proyek](#struktur-proyek)
- [API Endpoint](#api-endpoint)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## Fitur

- **Location Tracking**: Mengelola data lokasi pedagang secara real-time.
- **Manajemen Status Pedagang**: Mengatur status pedagang (aktif/non-aktif).
- **Pencarian Pedagang**: Pencarian berdasarkan lokasi dan produk yang dijual.
- **Pencarian Produk**: Pencarian produk yang dijual.

## Persyaratan Sistem

- Node.js v16 atau lebih baru
- NPM v8 atau lebih baru
- PostgreSQL sebagai database
- Sequelize sebagai ORM

## Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/username/backend-kakilima.git
   cd backend-kakilima
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Pastikan PostgreSQL berjalan di sistem Anda.

## Konfigurasi

1. Buat file `.env` di root proyek dengan variabel berikut:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=kakilima
   DB_USER=your_username
   DB_PASSWORD=your_password
   JWT_SECRET=your_jwt_secret_key
   ```

2. Sesuaikan konfigurasi dengan kebutuhan Anda.

## Menjalankan Aplikasi

1. Untuk menjalankan server dalam mode pengembangan:
   ```bash
   npm run dev
   ```

2. Untuk menjalankan server dalam mode produksi:
   ```bash
   npm start
   ```

3. Server akan berjalan di `http://localhost:3000` secara default.

## Struktur Proyek

```
kakilima-be/
├── database/
│   ├── config/        
│   ├── migrations/   
│   ├── models/       
│   ├── seeders/       
├── src/
│   ├── cron/         
│   ├── modules/      
│   │   ├── addressModules/
│   │   ├── authModules/
│   │   ├── locationModules/
│   │   ├── merchantModules/
│   │   └── productModules/
│   ├── public/        
│   ├── routes/        
│   └── utils/         
├── .env              
├── Dockerfile         
├── package.json       
├── server.js         
```

## API Endpoint

Untuk melihat API Endpoint lengkap, dapat mengakses pada POSTMAN di bawah ini
https://galactic-crater-815988.postman.co/workspace/New-Team-Workspace~89aec457-5d6c-4464-bd7e-53540fa36d6b/collection/33474817-e95c30f5-c24a-4438-9c28-5b03b44fa635?action=share&creator=33474817&active-environment=33474817-4dda2a44-4e23-4234-8ee5-7b04b52c5e02

## Kontribusi

Kontribusi sangat dihargai! Untuk berkontribusi:

1. Fork repositori ini.
2. Buat branch fitur baru: `git checkout -b feature-anda`
3. Commit perubahan Anda: `git commit -m 'Menambahkan fitur tertentu'`
4. Push ke branch: `git push origin feature-anda`
5. Ajukan Pull Request.
