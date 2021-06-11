const express = require('express');

const router = express.Router();

router.post('/signup', (request, response) => {
  response.send(request.body);
});

module.exports = router;
