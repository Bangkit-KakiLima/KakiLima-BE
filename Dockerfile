FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000
ENV JWT_SECRET=0a5d6a2f4c8b9d7e1f2b3a4c6e7f8g1h3j5k6l7m8n9p0qrs
ENV OPENWEATHERMAP_API_KEY="a76862482261a2dab25b692e5882999e"
ENV MAIL_USER='kakilimadev@gmail.com'
ENV MAIL_PASSWORD='shkc jkhi wsnn dbkc'
ENV MAIL_PORT=465
ENV MAIL_HOST='smtp.gmail.com'
ENV DB_HOST='34.101.255.149'
ENV DB_USERNAME='postgres'
ENV DB_PASSWORD='kakilima'
ENV DB_NAME='KakiLima-BE'
ENV DB_PORT=5432
ENV DB_DIALECT='postgres'

CMD ["npm", "start"]