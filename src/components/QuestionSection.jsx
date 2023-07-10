import React from 'react';

const QuestionSection = ({
  question,
  selectDay,
  handleSelectLC,
  handleType,
  type,
  selectType,
  handleGenQuestion,
  selectName,
}) => {
  return (
    <>
      <div className='flex bg-base-100 w-auto h-12 mb-2 items-center justify-center rounded-md p-4'>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text mr-2'>RC</span>
            <input
              type='radio'
              name='rc'
              className='radio checked:bg-red-500'
              checked={type === 'RC' ? true : false}
              onChange={handleType}
            />
          </label>
        </div>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <span className='label-text mr-2'>LC</span>
            <input
              type='radio'
              name='lc'
              className='radio checked:bg-blue-500'
              checked={type === 'LC' ? true : false}
              onChange={handleType}
            />
          </label>
        </div>

        <div className='flex items-center'>
          <div className='dropdown ml-5'>
            <label tabIndex={0} className='btn-md m-1 bg-secondary p-2 rounded-md'>
              {selectName}
            </label>
            <ul
              tabIndex={0}
              className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
            >
              {selectType.map((select, i) => {
                return (
                  <li key={i}>
                    <button name={select} onClick={handleSelectLC}>
                      {select}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className='btn-sm rounded-md bg-primary' onClick={handleGenQuestion}>
            문제 생성
          </button>
        </div>
      </div>

      <div className='flex items-center justify-center collapse-title text-xl font-medium bg-base-100 text-center rounded-md w-auto h-12 p-4 mb-5'>
        <p className='mr-3'>문제 :&nbsp; {question.word}</p>
        <div className='tooltip' data-tip={question.mean}>
          <button className='btn-sm bg-secondary rounded-md'>힌트</button>
        </div>
      </div>
    </>
  );
};

export default QuestionSection;
