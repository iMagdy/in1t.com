FROM node:alpine

COPY ./dist /app

WORKDIR /app

RUN yarn global add http-server

CMD http-server ./ -p ${PORT} -d false -d -g --utc --proxy http://0.0.0.0:${PORT}?