const express = require('express');
const fs = require('fs');

const app = express();

app.get('/vegetables', function(req, res) {
    fs.readFile('vegetables.json', function(err, data) {
      if (err) throw err;
      const vegetables = JSON.parse(data);
      res.json(vegetables);
    });
  });
  
  const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});