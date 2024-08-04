import React from 'react';

const WordForm = ({ inputValue, handleInput, handleSubmitForm }) => {
  return (
    <form className='flex flex-col gap-2'>
      <input
        type='text'
        name='word'
        value={inputValue.word}
        className='input input-bordered'
        placeholder='단어'
        onChange={handleInput}
        required
      />
      <input
        type='text'
        name='mean'
        value={inputValue.mean}
        className='input input-bordered'
        placeholder='뜻'
        onChange={handleInput}
        required
      />
      <textarea
        type='text'
        name='memo'
        value={inputValue.memo}
        className='textarea textarea-bordered text-base'
        placeholder='메모'
        onChange={handleInput}
      />
      <button className='btn' disabled={!inputValue.word.length || !inputValue.mean.length} onClick={handleSubmitForm}>
        추가
      </button>
    </form>
  );
};

export default WordForm;
