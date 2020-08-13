# My version of [react pizza](https://github.com/Archakov06/react-pizza)

### Hosted on heroku: https://ts-react-pizza.herokuapp.com (can loading few minutes)

## Front-end: typescript, react, react-router-dom, react-content-loader, styled-components, redux, @reduxjs/toolkit, axios.
## For dev: json-server, webpack(custom config), babel.

## Back-end: typescript, ts-node, express.

### Deploy:

* Classic:
    * npm run start

* Docker:
    * with docker-compose:
        * docker-compose build
        * docker-compose up
    * without:
        * docker build -t ts-react-pizza . 
        * docker run -p 3000:3000 ts-react-pizza

### Commands:

* npm run start - create build and start server with install dependencies.
* npm run build - install dependencies and create front-end build.
* npm run build:without - create front-end build without install dependencies.
* npm run server - install dependencies and start server with front-end build.
* npm run server:without - start server without install dependencies.

#### [Design](https://www.figma.com/file/wWUnQwvRDWBfPx1v1pCAfO/React-Pizza?node-id=0%3A1)
