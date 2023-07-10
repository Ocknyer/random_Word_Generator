import React from 'react';

const HintSection = () => {
  return (
    <>
      <button className='hint-btn'>힌트 보기</button>
      <div className='hint-box hidden'>
        <h2 className='title-h2'>힌트공간</h2>
        <ul className='hint-ul'></ul>
      </div>
    </>
  );
};

export default HintSection;
