FROM node:latest

LABEL maintainer="robertoachar@gmail.com"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm install -g nodemon

EXPOSE 3000

CMD [ "nodemon", "-L", "src/index.js" ]
