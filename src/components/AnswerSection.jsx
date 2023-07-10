import React from 'react';

const AnswerSection = ({ question, rightAnswer, wrongAnswer, handleAnswer, handleSubmit }) => {
  return (
    <>
      <form className='flex gap-2 mb-10'>
        <input
          type='text'
          onKeyUp={handleAnswer}
          className='input input-primary w-full max-w-xs'
          placeholder='정답 입력'
        />
        <button className='btn' onClick={handleSubmit}>
          제출
        </button>
      </form>

      <div className='overflow-auto w-full rounded-md'>
        <table className='table table-lg'>
          <thead>
            <tr className='bg-base-100'>
              <th></th>
              <th>단어</th>
              <th>뜻</th>
            </tr>
          </thead>

          {rightAnswer.length > 0 && (
            <tbody className='bg-base-100'>
              {rightAnswer.map((answer, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{answer.word}</td>
                    <td>{answer.mean[0]}</td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default AnswerSection;
