const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle GET requests to the root directory
app.get('/', (req, res) => {
  res.send('Welcome to the calculate-age API!');
});

app.post('/calculate-age', (req, res) => {
  const { dob } = req.body;
  const age = moment().diff(moment(dob, 'YYYY-MM-DD'), 'years');
  res.json({ age });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
