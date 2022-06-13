FROM node:16.15

COPY . /app/
WORKDIR /app/server/
RUN npm install
EXPOSE 3000 3000
CMD [ "node", "/app/server/dist/index.js" ]
