# PING! - Kaki Lima Tracking App - Cloud Computing 
## Bangkit Capstone Project 2024
Bangkit Capstone Team ID: C242-PS123
Here is our repository for the Bangkit 2024 Capstone project - Cloud Computing
## Description
Cloud Computing have responsibilities for creating and managing APIs, databases and servers. We also provides needed by the Mobile Development and Machine Learning divisions. So that the features we have designed in this mobile application, the data and information entered by users, such as names, emails, images, etc can be properly used, stored and maintained.

## Cloud Development Schedule
| Task  | Week 1 | Week 2 | Week 3 |
| -------- | ------------- | --------- | ------- | 
| Task 1| Research services that needed for app features| Build API | Deploy BE Server to GCP |
| Task 2| Create ERD and research services that needed for app features| Debug API services | API testing and evaluation |

## System Requirements

- Node.js v16
- Express.js
- NPM v8
- PostgreSQL
- Sequelize
- OpenStreetMap
- OpenWeatherMap
- Google Cloud Platform

## Cloud Architecture
![Cloud Architecture](https://github.com/user-attachments/assets/380e82c6-2e20-45c9-99b9-9c884ad5a138)
On this project, we utilize google cloud platform products to create robust and fully maintained system. Products that we chose are compute engine as backend server, cloud sql for database server, cloud storage for backup sql data, and cloud run to host Machine Learning service.

## Entity Relationship Diagram
![Bangkit ERD](https://github.com/user-attachments/assets/508820ed-122f-4996-97b8-add6ec500cd9)
We created ERD design before we start to work on the API development. It helps us to plan and create the system that needs to be stored and to be show within the application needs.



## Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/Bangkit-KakiLima/KakiLima-BE.git
   cd KakiLima-BE
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make sure PostgreSQL is running on your device.
   
## Configuration

1. Make `.env` file in root project with these variables:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=kakilima
   DB_USER=your_username
   DB_PASSWORD=your_password
   JWT_SECRET=your_jwt_secret_key
   ```

2. Adjust configuration based on your need.

## Run the application

1. Run server in development mode:
   ```bash
   npm run dev
   ```

2. Run server in production mode:
   ```bash
   npm start
   ```

3. Server will run at `http://localhost:3000` by default.

# API Documentation
## Ping! Endpoint Documentation
[Ping! Endpoint Documentation](https://documenter.getpostman.com/view/33474817/2sAYHwJjzT)
## OpenStreetMap Documentation
[OpenStreetMap Documentation](https://wiki.openstreetmap.org/wiki/API_v0.6)
## OpenWeatherMap Documentation
[OpenWeatherMap Documentation](https://openweathermap.org/api)

