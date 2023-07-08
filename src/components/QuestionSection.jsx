import React from 'react';

const QuestionSection = ({ question }) => {
  return (
    <div className='flex items-center justify-center collapse-title text-xl font-medium bg-base-100 text-center rounded-md w-80 h-12 p-4 mb-5'>
      <p className='mr-3'>문제 :&nbsp; {question.word}</p>
      <div className='tooltip' data-tip={question.mean}>
        <button className='btn-sm bg-secondary rounded-md'>힌트</button>
      </div>
    </div>
  );
};

export default QuestionSection;
