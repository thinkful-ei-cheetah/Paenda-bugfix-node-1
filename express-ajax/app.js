'use strict'

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/sum', (request, response) => {
  const query = request.query;
  const a = Number(query.a);
  const b = Number(query.b);

  const output = `The sum of a and b is ${a + b}`;

  response.status(200).json(output)
});

app.listen(8080, function() {console.info(`Server is listening on ${this.address().port}`);});