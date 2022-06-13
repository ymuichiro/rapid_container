FROM node:16.15

COPY ./server/ /app/

WORKDIR /app

RUN npm install

EXPOSE 3000 3000
CMD [ "node", "/app/dist/index.js" ]
