const express = require('express');

let app = express();
let port = 3000;

app.use(express.static('dist'));

app.listen(port, () => console.log(`Listening on port ${port}!`));
