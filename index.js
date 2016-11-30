const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('/favicon.ico', (req, res) => {
  res.sendStatus(200);
});

// API code
app.get('/api/temperature', (req, res) => {
  return res.send({
    current:88,
    measurementType: 'Fahrenheit'
  })
})

app.listen(8080, () => console.log('bens app started'));