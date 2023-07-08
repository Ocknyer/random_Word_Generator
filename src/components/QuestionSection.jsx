import React from 'react';
import arrWords from '../data/words.js';

const QuestionSection = () => {
  const randomNum = ~~(Math.random() * arrWords.length);
  const currentWord = arrWords[randomNum];
  console.log(currentWord, 'ddfdfa');

  // React.useEffect(() => {
  //   setWord(arrWords[randomNum]);
  //   console.log(word);
  // }, []);

  return (
    <div className='collapse-title text-xl font-medium bg-base-300 text-center rounded-sm'>
      <p className='question-header'>문제 :&nbsp; {currentWord.word}</p>
    </div>
  );
};

export default QuestionSection;
