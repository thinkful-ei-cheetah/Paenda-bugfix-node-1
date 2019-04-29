'use strict'

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('url', (request, response) => {

let output = data
const query = request.query;
console.log(query)


response.status(200).json(output)
});

app.listen(8080, function() {console.info(`Server is listening on ${this.address().port}`);};