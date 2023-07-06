import arrWords from './words.js';

const words = document.querySelector('.words');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const wordGenBtn = document.querySelector('.gen-btn');
const submitBtn = document.querySelector('.submit-btn');
const answerUl = document.querySelector('.answer-ul');
const answerLi = document.querySelector('.answer-li');

const hintBtn = document.querySelector('.hint-btn');
const hintBox = document.querySelector('.hint-box');
const hintUl = document.querySelector('.hint-ul');

let currentWord = {};
const arrAnswer = [];
const hint = [];

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
    list.innerHTML = `<li class="answer-li">${currentWord.word + '    ' + currentWord.mean}</li>`;
    answerUl.append(list);
    answer.value = null;
    genWord();
  } else if (!answer.value) {
    alert('답을 입력하세요');
  } else if (!currentWord.mean.includes(answer.value)) {
    alert('땡!!! 벌써 힌트를 보시겠습니까???');
    const list = document.createElement('li');
    list.innerHTML = `<li class="hint-li">${currentWord.word + '    ' + currentWord.mean}</li>`;
    hintUl.append(list);
  }

  console.log(currentWord);
  console.log(answer.value, currentWord.mean);
  console.log(currentWord.mean.includes(answer.value));
});

// wordGenBtn.addEventListener('click', () => {
//   const randomNum = ~~(Math.random() * arrWords.length);
//   currentWord = arrWords[randomNum];
//   question.textContent = currentWord.word;
//   console.log(randomNum);
// });

console.log('딴짓하지 말고 열심히 하자');

hintBtn.addEventListener('click', () => {
  console.log('hi');
  hintBox.classList.toggle('hidden');
});

window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = '';
});
