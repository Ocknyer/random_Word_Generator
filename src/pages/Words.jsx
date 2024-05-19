import React from 'react';
import wordsArray from '../data/words/index';
import { VolumeIcon } from '../assets/icons';
import { getSpeech } from '../utils/utils';

const Words = () => {
  const [currentWords, setCurrentWords] = React.useState(wordsArray[0].value);

  const handleCurrentWords = (e) => {
    setCurrentWords(JSON.parse(e.target.value));
  };

  return (
    <div className='flex flex-col gap-4 w-full dark800 pb-16 dark:text-white p-2 items-center'>
      <select className='select select-bordered w-full max-w-sm' onChange={handleCurrentWords}>
        {wordsArray.map((words, idx) => (
          <option key={idx} value={JSON.stringify(words.value)}>
            {words.name}
          </option>
        ))}
      </select>
      <section className='flex flex-col w-full border dark:border-zinc-500 rounded-xl overflow-hidden'>
        <div className='flex h-12 items-center border-b dark:border-zinc-500 font-bold dark800 overflow-hidden  divide-x-[1px]'>
          <p className='table-header w-12'>번호</p>
          <p className='table-header w-40 md:w-96'>단어</p>
          <p className='table-header md:w-96'>뜻</p>
          <p className='table-header-last-hidden'>메모</p>
        </div>

        <div className='divide-y-[1px] dark:divide-zinc-500'>
          {currentWords.map((word) => {
            return (
              <div className='flex flex-col md:flex-row'>
                <div key={word.id} className='flex min-h-12 items-center divide-x-[1px] dark:divide-zinc-500'>
                  <p className='table-data w-12 justify-center'>{word.id}</p>
                  <div className='table-data w-40 md:w-96 gap-2'>
                    <p className=''>{word.word}</p>
                    <button onClick={(e) => getSpeech(e, word.word)} className='w-6 h-6'>
                      <img src={VolumeIcon} alt='발음 듣기' className='w-6 h-6 dark:invert' />
                    </button>
                  </div>
                  <div className={'table-data justify-between ' + [word.memo ? 'md:w-96' : 'flex-1']}>
                    <p>{word.meaning}</p>
                  </div>
                </div>
                {word.memo && (
                  <p className='table-data-last min-h-12 flex-1 border-t border-b-2 dark:border-zinc-500 md:border-b-0 md:border-t-0 md:border-l text-blue-400 bg-gray-100 dark:bg-zinc-700'>
                    {word.memo}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Words;
