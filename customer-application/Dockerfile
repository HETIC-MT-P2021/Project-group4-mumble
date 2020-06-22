FROM node:latest as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY . .

ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g react-scripts@1.1.1
RUN npm run build