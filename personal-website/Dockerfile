# syntax=docker/dockerfile:1.4

FROM alpine:latest AS builder

RUN mkdir /project
WORKDIR /project

RUN apk update
RUN apk add --update nodejs npm
RUN apk add --update build-base

RUN npm install -g @angular/cli@13

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]