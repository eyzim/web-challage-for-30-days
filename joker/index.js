const j = require('give-me-a-joke')
const color = require('colors')
// console.dir(j)

j.getRandomDadJoke(function (joke){
    console.log(joke.rainbow);
});