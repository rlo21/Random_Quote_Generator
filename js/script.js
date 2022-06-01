/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Author: Rosa Lopez
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// `quotes` array//

let quotes = [
  {
    quote: ' Imagination is more important than knowledge.',
    source: 'Albert Einstien',
    year: '1924'
  },
  { 
    quote: 'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.',
    source: 'Nikola Tesla',
    year: '1890'
  },
  { 
    quote: 'You cannot teach a man anything; you can only help him discover it in himself.',
    source: 'Galileo',
    year: '1642'
  },
  { 
    quote: 'There is no law except the law that there is no law.',
    source: 'John Archibald Wheeler',
    citation: 'Forbes',
    year: '2008'
  },
  { 
    quote: 'Equipped with his five senses, man explores the universe around him and calls the adventure Science.',
    source: 'Edwin Powell Hubble',
    year: '1953'
  }
];

//console.log(quotes);//

/***
 * getRandomQuote` function
 * creates a random number from 0 to the length of quotes array.
***/

function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber]; //needs [] since array 
}

/***
 * `printQuote` function
***/
function printQuote(quotes){
 let callRandomQuote = getRandomQuote();  //set variable to random # of quotes []
 
  //following creates variable to tie in info with classses in index.html
  let html = '';
  html += `<p class ="quote"> ${callRandomQuote.quote}</p> 
  <p class="source">${callRandomQuote.source}`; 

if (callRandomQuote.citation) {
    html += `<span class="citation"> ${callRandomQuote.citation} </span>`;
  }
if (callRandomQuote.year) {
    html += `<span class="year"> ${callRandomQuote.year} </span>`;
  }

  html += '<p>';
  return document.getElementById('quote-box').innerHTML = html; 
}
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/*** 
 EXTRA CREDIT
***/

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
//create a random color output in rgb
function randomColor(){
  let randomNum = () => Math.floor(Math.random() * 256);
  let color = `rgb( ${randomNum()}, ${randomNum()}, ${randomNum()} )`
  return color;
}
//tie random color to changing the background color
function changeColor (){
  let backgroundColor = (document.body.style.backgroundColor = randomColor());
}

//tie color change function & print quote function together
function quoteBackgroundChange() {
  changeColor();
  printQuote();
}

//create a timer for background color using the setInterval method
setInterval(quoteBackgroundChange, 5000);
