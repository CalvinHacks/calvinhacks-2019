const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.post('/', (req, res) => {
  res.end();
});

const port = process.env.PORT || 4000;
app.set('port', port);

const server = http.createServer(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
