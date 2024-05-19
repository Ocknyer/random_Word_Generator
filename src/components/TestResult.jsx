import React from 'react';

const TestResult = ({ totalLength, isShow, correct, incorrect, handleNoteShow, handleResetTest }) => {
  return (
    <div className='flex flex-col gap-4 w-full h-full pb-16'>
      <h1 className={'text-3xl text-center'}>
        <span className={[correct.length >= totalLength / 2 ? 'text-blue-500' : 'text-red-500']}>{correct.length}</span>
        /<span>{totalLength}</span>
      </h1>

      <div className='w-full border dark:border-zinc-500 rounded-lg'>
        <p className='h-10 flex items-center justify-center border-b dark:border-zinc-500 text-lg font-bold'>정답</p>
        {isShow.correctShow && (
          <>
            <div className='flex h-12 items-center border-b dark:border-zinc-500 w-full font-bold dark800'>
              <p className='table-header w-36 md:w-96'>단어</p>
              <p className='table-header flex-1'>뜻</p>
              <p className='table-header-last flex-1'>내 답안</p>
            </div>
            {correct.map((word) => {
              return (
                <div key={word.id} className='flex min-h-12 items-center border-b dark:border-zinc-500'>
                  <div className='table-data w-36 md:w-96 gap-2'>
                    <p className=''>{word.word}</p>
                  </div>
                  <p className='table-data flex-1'>{word.meaning}</p>
                  <p className='table-data-last flex-1'>{word.myAnswer}</p>
                </div>
              );
            })}
          </>
        )}
        <button onClick={() => handleNoteShow('co')} className='text-center w-full h-8 text-sm'>
          {!isShow.correctShow ? '노트 보기' : '닫기'}
        </button>
      </div>

      <div className='w-full border dark:border-zinc-500 rounded-lg'>
        <p className='h-10 flex items-center justify-center border-b dark:border-zinc-500 text-lg font-bold'>오답</p>
        {isShow.incorrectShow && (
          <>
            <div className='flex h-12 items-center border-b dark:border-zinc-500 w-full font-bold dark800'>
              <p className='table-header w-36 md:w-96'>단어</p>
              <p className='table-header flex-1'>뜻</p>
              <p className='table-header-last flex-1'>내 답안</p>
            </div>
            {incorrect.map((word) => {
              return (
                <div key={word.id} className='flex min-h-12 items-center border-b dark:border-zinc-500'>
                  <div className='table-data w-36 md:w-96 gap-2'>
                    <p className=''>{word.word}</p>
                  </div>
                  <p className='table-data flex-1'>{word.meaning}</p>
                  <p className='table-data-last flex-1'>{word.myAnswer}</p>
                </div>
              );
            })}
          </>
        )}
        <button onClick={() => handleNoteShow('inco')} className='text-center w-full h-8 text-sm'>
          {!isShow.incorrectShow ? '노트 보기' : '닫기'}
        </button>
      </div>
      <button className='btn bg-blue-400 text-white' onClick={handleResetTest}>
        초기화
      </button>
    </div>
  );
};

export default TestResult;
