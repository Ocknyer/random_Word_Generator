import React from 'react';
import Header from '../components/Header';
import QuestionSection from '../components/QuestionSection';
import AnswerSection from '../components/AnswerSection';
import HintSection from '../components/HintSection';
import arrWords from '../data/words.js';

const Home = () => {
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [rightAnswer, setRightAnswer] = React.useState([]);
  const [wrongAnswer, setWrongAnswer] = React.useState([]);

  const randomNum = ~~(Math.random() * arrWords.length);

  React.useEffect(() => {
    setQuestion(arrWords[randomNum]);
  }, [rightAnswer]);

  console.log(question);

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (question.mean.includes(answer) && rightAnswer.filter((item) => item.id !== question.id)) {
      setRightAnswer([...rightAnswer, question]);
      console.log(rightAnswer);
    } else if (!question.mean.includes(answer)) {
      setWrongAnswer([...wrongAnswer, answer]);
      alert('땡! 힌트를 보시겠습니까?');
    }
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center p-5'>
      <div className='w-full h-full flex flex-col justify-start items-center bg-primary p-12'>
        <Header />
        <QuestionSection question={question} />
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
