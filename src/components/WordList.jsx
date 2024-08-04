import React from 'react';
import { getSpeech } from '../utils/utils';
import { CloseIcon, VolumeIcon } from '../assets/icons';
import EditWordForm from './EditWordForm';

const WordList = ({
  wordList,
  onEdit,
  handleEditState,
  newInputValue,
  handleNewInput,
  handleEditWord,
  handleDeleteWord,
}) => {
  return (
    <div className='flex flex-col gap-4 w-full mb-4 dark:text-white items-center'>
      <section className='flex flex-col w-full border dark:border-zinc-500 rounded-xl overflow-hidden'>
        <div className='flex h-12 items-center border-b dark:border-zinc-500 font-bold overflow-hidden  divide-x-[1px]'>
          <p className='table-header w-12'>번호</p>
          <p className='table-header w-40 md:w-96'>단어</p>
          <p className='table-header md:w-96'>뜻</p>
          <p className='table-header-last-hidden'>메모</p>
        </div>

        <div className='divide-y-[1px] dark:divide-zinc-500'>
          {wordList.map((word, idx) => {
            return (
              <div key={idx} className='flex flex-col md:flex-row'>
                <div className='flex min-h-12 items-center divide-x-[1px] dark:divide-zinc-500'>
                  <p
                    className='table-data w-12 justify-center line-clamp-1'
                    onClick={() => document.getElementById(word.id).showModal()}
                  >
                    {word.id}
                  </p>
                  <div className='table-data w-40 md:w-96 gap-2'>
                    <p className=''>{word.word}</p>
                    <button onClick={(e) => getSpeech(e, word.word)} className='w-6 h-6'>
                      <img src={VolumeIcon} alt='발음 듣기' className='w-6 h-6 dark:invert' />
                    </button>
                  </div>
                  <div className={'table-data justify-between ' + [word.memo ? 'md:w-96' : 'flex-1']}>
                    <p>{word.mean}</p>
                  </div>
                </div>
                {word.memo && (
                  <p className='table-data-last min-h-12 flex-1 border-t border-b-2 dark:border-zinc-500 md:border-b-0 md:border-t-0 md:border-l text-blue-400 bg-gray-100 dark:bg-zinc-700'>
                    {word.memo}
                  </p>
                )}
                <dialog id={word.id} className='modal'>
                  <div className='modal-box flex flex-col gap-1 relative pt-12'>
                    {!onEdit ? (
                      <>
                        <div className='flex items-center gap-2'>
                          <h3 className='font-bold text-xl'>{word.word}</h3>
                          <button onClick={(e) => getSpeech(e, word.word)} className='w-6 h-6'>
                            <img src={VolumeIcon} alt='발음 듣기' className='w-6 h-6 dark:invert' />
                          </button>
                        </div>
                        <p className='text-lg font-bold'>{word.mean}</p>
                        <p className='text-lg text-blue-400'>{word.memo}</p>
                      </>
                    ) : (
                      <EditWordForm
                        word={word}
                        newInputValue={newInputValue}
                        handleNewInput={handleNewInput}
                        handleEditWord={handleEditWord}
                      />
                    )}

                    <div className='flex justify-between items-end mt-4'>
                      <div className='text-sm'>
                        <p>등록: {word.createdAt}</p>
                        <p>수정: {word.updatedAt}</p>
                      </div>
                      <div className='flex justify-end'>
                        <button onClick={handleEditState} className='btn btn-sm btn-warning mr-2'>
                          수정
                        </button>
                        <button onClick={() => handleDeleteWord(word.id)} className='btn btn-sm btn-error'>
                          삭제
                        </button>
                      </div>
                    </div>

                    <form method='dialog' className='absolute top-3 right-3'>
                      <button>
                        <img src={CloseIcon} alt='닫기' />
                      </button>
                    </form>
                  </div>
                </dialog>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default WordList;
