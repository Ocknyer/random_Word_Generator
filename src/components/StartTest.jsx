import React from 'react';

const StartTest = ({ dayList, handleStartTest, setDay, onSelect, setOnSelect }) => {
  return (
    <div className='w-full flex flex-col gap-4 p-4 items-center justify-center h-full mt-24'>
      <select
        className='select select-bordered w-full max-w-sm'
        defaultValue={'1'}
        onChange={(e) => {
          setDay(e.target.value);
          setOnSelect(true);
        }}
      >
        <option disabled value={'1'} key={0}>
          단어 선택
        </option>
        {dayList.map((words, idx) => (
          <option key={idx + 1} value={JSON.stringify(words.value)}>
            day{idx + 1}
          </option>
        ))}
      </select>
      <button onClick={handleStartTest} className='btn btn-info max-w-md' disabled={!onSelect}>
        시험 시작
      </button>
    </div>
  );
};

export default StartTest;
