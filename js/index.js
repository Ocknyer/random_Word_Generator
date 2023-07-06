import arrWords from './words.js';

const words = document.querySelector('.words');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const wordGenBtn = document.querySelector('.gen-btn');
const submitBtn = document.querySelector('submit-btn');
const answetList = document.querySelector('.answerList');

function genWord() {
  const randomNum = ~~(Math.random() * arrWords.length);
  question.textContent = arrWords[randomNum].word;
}

genWord();

wordGenBtn.addEventListener('click', () => {
  const randomNum = ~~(Math.random() * arrWords.length);
  question.textContent = arrWords[randomNum].word;
  console.log(randomNum);
});
