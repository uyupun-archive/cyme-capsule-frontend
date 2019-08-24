FROM node:10-alpine

WORKDIR /app

RUN apk update && apk upgrade && apk add git
RUN npm i -g npm && npm i -g yarn

ENV HOST 0.0.0.0

EXPOSE 3000