import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center dark800 pb-12'>
      <Calendar formatDay={(locale, date) => moment(date).format('DD')} />
      <div></div>
    </div>
  );
};

export default Home;
