import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import QuestionSection from '../components/QuestionSection';
import AnswerSection from '../components/AnswerSection';
import rc2 from '../data/RC/rc2';
import lcDay5 from '../data/LC/lcDay5.js';
import lcDay6 from '../data/LC/lcDay6.js';
import lcDay7 from '../data/LC/lcDay7.js';

const lcData = ['5일차', '6일차', '7일차'];
const rcData = ['기출 2번', '기출 3번'];

const Home = () => {
  const [selectDay, setSelectDay] = useState(lcDay5);
  const [answer, setAnswer] = useState('');
  const [rightAnswer, setRightAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [type, setType] = useState('RC');
  const [question, setQuestion] = useState('');

  const [selectType, setSelectType] = useState(rcData);

  const [currentQuestionList, setCurrentQuestionList] = useState(lcDay5);

  const [selectName, setSelectName] = useState(rcData[0]);

  useEffect(() => {
    if (type === 'RC') {
      setSelectDay('rc2');
      setSelectName(rcData[0]);
    } else if (type === 'LC') {
      setSelectDay('lcDay5');
      setSelectName(lcData[0]);
    }
  }, [type]);

  // console.log(question, 'question');

  // console.log(rightAnswer, 'rightAnswer');
  // console.log(selectDay, 'selectDay');

  const handleType = (e) => {
    if (e.target.name === 'rc') {
      setType('RC');
      setSelectType(rcData);
    } else if (e.target.name === 'lc') {
      setType('LC');
      setCurrentQuestionList(lcDay5);
      setSelectType(lcData);
    }
  };

  const handleSelectLC = (e) => {
    if (e.target.name === '5일차') {
      setSelectName('5일차');
      setSelectDay(lcDay5);
      setCurrentQuestionList(lcDay5);
    } else if (e.target.name === '6일차') {
      setSelectName('6일차');
      setSelectDay(lcDay6);
      setCurrentQuestionList(lcDay6);
    } else if (e.target.name === '7일차') {
      setSelectName('7일차');
      setSelectDay(lcDay7);
      setCurrentQuestionList(lcDay7);
    }
    setQuestion('');
  };

  const handleGenQuestion = () => {
    const randomNum = ~~(Math.random() * selectDay.length);
    setQuestion(selectDay[randomNum]);
  };

  console.log(selectDay, selectName);

  const handleAnswer = (e) => {
    setAnswer(e.target.value);

    if (e.key === 'Enter') {
      e.target.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (question.mean.includes(answer) && rightAnswer.filter((item) => item.id !== question.id)) {
      const randomNum = ~~(Math.random() * currentQuestionList.length);

      console.log(currentQuestionList, 'current');

      const filtered = currentQuestionList.filter((item) => item.id !== question.id);

      setCurrentQuestionList(filtered);

      console.log(currentQuestionList, 'filterd');

      setQuestion(currentQuestionList[randomNum]);

      setRightAnswer([...rightAnswer, question]);
    } else if (!question.mean.includes(answer)) {
      setWrongAnswer([...wrongAnswer, answer]);
      alert('땡! 힌트를 보시겠습니까?');
    }
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center p-5'>
      <div className='w-full h-full flex flex-col justify-start items-center bg-primary p-12'>
        <Header />
        <QuestionSection
          selectName={selectName}
          handleGenQuestion={handleGenQuestion}
          type={type}
          selectType={selectType}
          question={question}
          handleSelectLC={handleSelectLC}
          selectDay={selectDay}
          handleType={handleType}
        />
        <AnswerSection
          question={question}
          rightAnswer={rightAnswer}
          wrongAnswer={wrongAnswer}
          handleAnswer={handleAnswer}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Home;
