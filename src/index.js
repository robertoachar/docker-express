const express = require('express');
const winston = require('winston');

const app = express();
const config = require('./config');

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

app.listen(config.PORT, () => {
  Object.keys(config).forEach((key) => winston.info(`${key}: ${config[key]}`));
});
