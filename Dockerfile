FROM node:12.13.1
WORKDIR /app

COPY . ./

RUN npm i && npm i -D && npm run build

CMD npm run serve

EXPOSE 5000