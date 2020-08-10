FROM node:12.13.1
WORKDIR /app

COPY . ./

RUN npm run build && cd ./back && npm i && npm i -D

CMD npm run server:without

EXPOSE 3000