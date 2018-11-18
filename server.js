const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.post('/', (req, res) => {
  console.log(req.body);
  addMailToList(req.body.email);
  res.end();
});

function addMailToList(addr) {
  var request = require("request");

  var options = {
    method: 'POST',
    url: 'https://us19.api.mailchimp.com/3.0/lists/8ca0184cb7/members',
    headers:
    {
      'Postman-Token': '1bacb8f0-3e0b-4a2c-bd73-401eab59d76f',
      'Cache-Control': 'no-cache',
      Authorization: 'Basic c290bHBhcmtAZ21haWwuY29tOmY4MzJmODUwMDJkZThlOTE3NzE0Njc2ZDE2MWNjYTFlLQ==',
      'Content-Type': 'application/json'
    },
    body: { email_address: addr, status: 'subscribed' },
    json: true
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    console.log(body);
  });
}

const port = process.env.PORT || 4000;
app.set('port', port);

const server = http.createServer(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
