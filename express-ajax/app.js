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

app.get('/cipher', (request, response) => {
  const query = request.query;
  const text = query.text;
  const shift = Number(query.shift);



  let charArr = text.toLowerCase().split('');
  let numArr= [];
  charArr.forEach (char => numArr.push(String.fromCharCode(((char.charCodeAt(0)-97+shift)%26)+97)));


  const output = `${numArr.join('')}`;

  response.status(200).json(output)
});

app.listen(8080, function() {console.info(`Server is listening on ${this.address().port}`);});