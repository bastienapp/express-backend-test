const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
// TODO: configure cors
app.use(cors());

app.post('/signup', (request, response) => {
  response.send(request.body);
});

module.exports = app;
