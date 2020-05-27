const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('hey world I was deployed from Jenkins!!!');
});

app.listen(process.env.PORT || 3001);

module.exports = app;
