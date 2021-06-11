const express = require('express');
const cors = require('cors');
const authRoute = require('./routes/auth');

const app = express();
app.use(express.json());
// TODO: configure cors
app.use(cors());

app.use('/', authRoute);

module.exports = app;
