import React from 'react';

const AnswerSection = () => {
  return (
    <>
      <form className='flex gap-2'>
        <input
          type='text'
          className='input input-primary w-full max-w-xs'
          placeholder='정답 입력'
        />
        <button className='btn'>제출</button>
      </form>
      <div className='flex flex-col items-center'>
        <h2 className='mb-2 text-xl'>정답공간</h2>
        <div className='overflow-x-auto'>
          <table className='table table-lg'>
            <thead>
              <tr className='bg-base-200'>
                <th></th>
                <th>단어</th>
                <th>뜻</th>
                <th>예문</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className='answer-ul'></ul>
      </div>
    </>
  );
};

export default AnswerSection;
