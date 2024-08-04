import React from 'react';

const EditWordForm = ({ word, newInputValue, handleNewInput, handleEditWord }) => {
  console.log(word, 'word');
  console.log(newInputValue, 'valaeuveu');

  // React.useEffect(() => {
  //   newInputValue({
  //     word: word.word,
  //     mean: word.mean,
  //     memo: word.memo,
  //   });
  // }, []);

  return (
    <form className='flex flex-col gap-2'>
      <input
        type='text'
        name='word'
        defaultValue={word.word}
        className='input input-bordered'
        placeholder='단어'
        onChange={handleNewInput}
        required
      />
      <input
        type='text'
        name='mean'
        defaultValue={word.mean}
        className='input input-bordered'
        placeholder='뜻'
        onChange={handleNewInput}
        required
      />
      <textarea
        type='text'
        name='memo'
        defaultValue={word.memo}
        className='textarea textarea-bordered text-base'
        placeholder='메모'
        onChange={handleNewInput}
      />
      <button
        className='btn'
        // disabled={!newInputValue.word.length || !newInputValue.mean.length}
        onClick={(e) => handleEditWord(e, word.id)}
      >
        수정
      </button>
    </form>
  );
};

export default EditWordForm;
