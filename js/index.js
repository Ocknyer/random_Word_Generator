import arrWords from './words.js';

const words = document.querySelector('.words');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const wordGenBtn = document.querySelector('.gen-btn');
const submitBtn = document.querySelector('.submit-btn');
const answerUl = document.querySelector('.answer-ul');
const answerLi = document.querySelector('.answer-li');

let currentWord = {};
const arrAnswer = [];

function genWord() {
  const randomNum = ~~(Math.random() * arrWords.length);
  currentWord = arrWords[randomNum];
  question.textContent = currentWord.word;
}

genWord();

// if (!answer.value) {
//   submitBtn.disabled = true;
// }

answer.addEventListener('onchange', (e) => {
  console.log(answer.value);
  if (e.target.value) {
    submitBtn.disabled = false;
  }
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentWord.mean.includes(answer.value)) {
    const list = document.createElement('li');
    list.innerHTML = `<li class="answe-li">${currentWord.word + '    ' + currentWord.mean[0]}</li>`;
    answerUl.append(list);
    genWord();
  } else if (!currentWord.mean.includes(answer.value)) {
    alert('땡!!!');
  }

  console.log(currentWord);
  console.log(answer.value, currentWord.mean);
  console.log(currentWord.mean.includes(answer.value));
});

wordGenBtn.addEventListener('click', () => {
  const randomNum = ~~(Math.random() * arrWords.length);
  currentWord = arrWords[randomNum];
  question.textContent = currentWord.word;
  console.log(randomNum);
});

console.log(currentWord);
