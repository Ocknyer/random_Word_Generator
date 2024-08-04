import React from 'react';
import { CloseIcon } from '../assets/icons';

const DaySelector = ({ dayList, setDay, handleCreateNewDay, newDay, handleNewDayName }) => {
  return (
    <div className='flex gap-2 mb-2'>
      <select className='select select-bordered w-full max-w-sm' onChange={(e) => setDay(e.target.value)}>
        {dayList.map((day, idx) => (
          <option value={day} key={idx}>
            {day}
          </option>
        ))}
      </select>
      <button className='btn' onClick={() => document.getElementById('day_modal').showModal()}>
        날짜 추가
      </button>
      <dialog id='day_modal' className='modal'>
        <div className='modal-box flex flex-col items-center relative pt-12'>
          <h3 className='font-bold text-lg'>날짜 추가</h3>
          <div className='flex gap-2 mt-4 w-full items-center justify-center'>
            <input
              type='text'
              name='newDay'
              value={newDay}
              onChange={(e) => handleNewDayName(e)}
              className='input input-bordered max-w-sm'
              placeholder='이름'
            />
            <button className='btn' disabled={!newDay} onClick={handleCreateNewDay}>
              추가
            </button>
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
};

export default DaySelector;
