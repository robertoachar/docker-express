const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

app.listen(port, () => {
  console.info(`Express is running on port: ${port}`);
});
