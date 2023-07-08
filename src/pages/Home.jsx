import React from 'react';
import Header from '../components/Header';
import QuestionSection from '../components/QuestionSection';
import AnswerSection from '../components/AnswerSection';
import HintSection from '../components/HintSection';

const Home = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-evenly items-center'>
      <Header />
      <QuestionSection />
      <AnswerSection />
      <HintSection />
    </div>
  );
};

export default Home;
