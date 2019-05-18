FROM node:alpine

COPY ./dist /app

WORKDIR /app

RUN yarn global add http-server

CMD http-server ./ -p 3000 -d false -g --utc --proxy http://0.0.0.0:3000?