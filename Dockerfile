FROM node:16.15

COPY . /app/
WORKDIR /app/server/
RUN yarn install
EXPOSE 3000 3000
CMD [ "yarn", "run", "start" ]
