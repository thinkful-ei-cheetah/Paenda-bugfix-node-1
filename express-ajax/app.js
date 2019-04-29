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

function getRandomNumber() {
  return Math.ceil(Math.random() * 20);
}

app.get('/lotto', (request, response) => {
  const query = request.query;
  console.log(query);

  const winningNumbers = [];

  query.arr.forEach( () => {
    let newNumber = getRandomNumber();

    while(winningNumbers.includes(newNumber)) {
      newNumber = getRandomNumber();
    }

    winningNumbers.push(newNumber);
  });

  let numbersMatched = 0;

  query.arr.map( num => {
    if(winningNumbers.includes(Number(num))) {
      numbersMatched++;
    }
  })

  let output = '';

  console.log(numbersMatched);

  switch(numbersMatched) {
    case 4:
      output = 'Congratulations, you win a free ticket';
      break;
    case 5:
      output = 'Congratulations! You win $100!';
      break;
    case 6:
      output = 'Wow! Unbelievable! You could have won the mega millions!';
      break;
    default:
      output = 'Sorry, you lose'
  }
  
  response.status(200).json({output, numbersPlayed: query.arr, winningNumbers})

});

app.listen(8080, function() {
  console.info(`Server is listening on ${this.address().port}`);
});