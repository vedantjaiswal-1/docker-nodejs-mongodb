FROM node:alpine

WORKDIR /docker-nodejs-mongodb

COPY package*.json ./

RUN yarn install

COPY .  .

EXPOSE 4000

CMD ["yarn" , "start"]