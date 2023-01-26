# syntax=docker/dockerfile:1.4

FROM alpine:latest AS builder

RUN mkdir /project
WORKDIR /project

RUN apk update
RUN apk add
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
RUN npm install -g @angular/cli@13

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder as dev-envs
RUN apt-get update
RUN apt-get install -y --no-install-recommends git

# install Docker tools (cli, buildx, compose)
# COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]