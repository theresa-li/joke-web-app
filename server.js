const express = require('express');
const axios = require('axios');

let app = express();
let port = 3000;

app.use(express.static('dist'));

app.get('/api/joke', (req, res) => {
  axios('https://jokes-api.herokuapp.com/api/joke')
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log('Failed to get joke. ', err);
      res.end();
    });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
