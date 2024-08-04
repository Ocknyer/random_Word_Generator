import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useVh } from '../hooks/useVh';

const Home = () => {
  const vh = useVh();
  return (
    <div
      className='w-full flex flex-col justify-center items-center pb-12 h-dvh'
      // style={{ height: `${100 * vh}px` }}
    >
      <Calendar formatDay={(locale, date) => moment(date).format('DD')} />
      <div></div>
    </div>
  );
};

export default Home;
