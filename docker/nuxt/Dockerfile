FROM node:10-alpine

RUN apk update && apk upgrade && npm i -g npm && npm i -g yarn && yarn install

ENV HOST 0.0.0.0

EXPOSE 3000

WORKDIR /app