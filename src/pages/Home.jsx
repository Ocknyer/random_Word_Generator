import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import QuestionSection from '../components/QuestionSection';
import AnswerSection from '../components/AnswerSection';
import rc2 from '../data/RC/rc2';
import StampList from '../components/StampList';
// import lcDay5 from '../data/LC/lcDay5.js';
// import lcDay6 from '../data/LC/lcDay6.js';
// import lcDay7 from '../data/LC/lcDay7.js';

const lcData = ['5일차', '6일차', '7일차'];
const rcData = ['기출 2번', '기출 3번'];

const lcDay5 = [
  {
    id: 1,
    word: 'retire',
    mean: ['사임하다'],
  },
  {
    id: 2,
    word: 'resignation',
    mean: ['사직', '사임'],
  },
  {
    id: 3,
    word: 'trainee',
    mean: ['교육받는 사람'],
  },
];

const lcDay6 = [
  {
    id: 1,
    word: 'estimate = quote',
    mean: ['견적', '견적서', '견적을 내다', '추정하다'],
  },
  {
    id: 2,
    word: 'approval',
    mean: ['승인', '찬성'],
  },
  {
    id: 3,
    word: 'approve',
    mean: ['~을 승인하다', '~를 승인하다'],
  },
];

const lcDay7 = [
  {
    id: 1,
    word: 'job opening (= job vacancy)',
    mean: ['빈자리', '(직장의)빈자리', '공석'],
  },
  {
    id: 2,
    word: 'recruit',
    mean: ['신입사원', '모집하다'],
  },
  {
    id: 3,
    word: 'recruiting agency',
    mean: ['취업정보회사'],
  },
];

const Home = () => {
  const [selectDay, setSelectDay] = useState(lcDay5);
  const [answer, setAnswer] = useState('');
  const [rightAnswer, setRightAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [type, setType] = useState('RC');
  const [question, setQuestion] = useState('');

  const [selectType, setSelectType] = useState(rcData);

  const [selectName, setSelectName] = useState(rcData[0]);
  const [stampList, setStampList] = useState([]);

  useEffect(() => {
    if (type === 'RC') {
      setSelectDay(rc2);
      setSelectName(rcData[0]);
    } else if (type === 'LC') {
      setSelectDay(lcDay5);
      setSelectName(lcData[0]);
    }
  }, [type]);

  // console.log(question, 'question');

  // console.log(rightAnswer, 'rightAnswer');
  // console.log(selectDay, 'selectDay');

  const handleType = (e) => {
    if (e.target.name === 'rc') {
      setType('RC');
      setSelectDay(rc2);
      setSelectType(rcData);
    } else if (e.target.name === 'lc') {
      setType('LC');
      setSelectDay(lcDay5);
      setSelectType(lcData);
    }
  };

  const handleSelectLC = (e) => {
    if (e.target.name === '5일차') {
      setSelectName('5일차');
      setSelectDay(lcDay5);
    } else if (e.target.name === '6일차') {
      setSelectName('6일차');
      setSelectDay(lcDay6);
    } else if (e.target.name === '7일차') {
      setSelectName('7일차');
      setSelectDay(lcDay7);
    }
    setQuestion('');
  };

  const handleGenQuestion = () => {
    // console.log(selectDay, 'yooo');
    const randomNum = ~~(Math.random() * selectDay.length);
    setQuestion(selectDay[randomNum]);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);

    if (e.key === 'Enter') {
      e.target.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (question.mean.includes(answer) && selectDay.filter((item) => item.id !== question.id)) {
      const filtered = selectDay.filter((item) => {
        console.log(item.id, question.id);
        return item.id !== question.id;
      });

      setSelectDay(filtered);

      console.log(selectDay, 'filterd');

      setRightAnswer([...rightAnswer, question]);

      const randomNum = ~~(Math.random() * selectDay.length);
      setQuestion(selectDay[randomNum]);
      if (selectDay.length === 0) {
        alert('끝!');
        setSelectDay(lcDay6);
      }
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
