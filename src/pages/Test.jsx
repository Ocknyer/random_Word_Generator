import React from 'react';
import _ from 'lodash';
import TestResult from '../components/TestResult';
import StartTest from '../components/StartTest';
import wordsArray from '../data/words';
import { InfoIcon } from '../assets/icons/index';
import { useVh } from '../hooks/useVh';

const Test = () => {
  const vh = useVh();
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [onTest, setOnTest] = React.useState(false);
  const [isTestEnd, setIsTestEnd] = React.useState(false);
  const [initialLists, setInitialLists] = React.useState(wordsArray[0].value);
  const [currentWordsList, setCurrentWordsList] = React.useState([]);
  const [currentWord, setCurrentWord] = React.useState({});
  const [answer, setAnswer] = React.useState('');
  const [correct, setCorrect] = React.useState([]);
  const [incorrect, setIncorrect] = React.useState([]);
  const [onSelect, setOnSelect] = React.useState(false);
  const [isShow, setIsShow] = React.useState({
    correctShow: false,
    incorrectShow: false,
  });

  const handleCurrentWords = (e) => {
    setOnSelect(true);
    setInitialLists(JSON.parse(e.target.value));
  };

  const handleStartTest = () => {
    setOnTest((prev) => !prev);
  };

  React.useEffect(() => {
    if (onTest) {
      setIsTestEnd(false);
      setCurrentWordsList(initialLists);
      setCurrentWord(initialLists[Math.floor(Math.random() * initialLists.length)]);
    }

    if (questionNumber === initialLists.length + 1) {
      setOnTest(false);
      setIsTestEnd(true);
    }
  }, [onTest, questionNumber]);

  React.useEffect(() => {
    const filtered = _.filter(currentWordsList, function (item) {
      return item.id !== currentWord.id;
    });

    console.log(filtered, '필터링');
    setCurrentWordsList(filtered);
    setCurrentWord(filtered[Math.floor(Math.random() * filtered.length)]);
  }, [questionNumber]);

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === '') {
      alert('정답을 입력하세요.');
      return;
    }
    setAnswer('');

    if (questionNumber <= initialLists.length) {
      setQuestionNumber((prev) => prev + 1);
    }

    if (currentWord.meaning.split(',').includes(answer)) {
      // alert('정답');
      setCorrect([...correct, { ...currentWord, myAnswer: answer }]);
    } else {
      // alert('오답');
      setIncorrect([...incorrect, { ...currentWord, myAnswer: answer }]);
    }

    console.log(currentWordsList.length, 'length2');
  };

  const handleNoteShow = (note) => {
    if (note === 'co') {
      setIsShow((prev) => {
        return { ...prev, correctShow: !prev.correctShow };
      });
    } else if (note === 'inco') {
      setIsShow((prev) => {
        return { ...prev, incorrectShow: !prev.incorrectShow };
      });
    }
  };

  const handleResetTest = () => {
    setQuestionNumber(1);
    setOnSelect(false);
    setOnTest(false);
    setIsTestEnd(false);
    setCorrect([]);
    setIncorrect([]);
    setIsShow({ correctShow: false, incorrectShow: false });
  };

  console.log(questionNumber, '넘버');
  console.log(correct, incorrect, '오답노트');
  console.log(onTest, isTestEnd, '온테 이테');
  console.log(currentWordsList, '리스트');
  console.log(currentWord, '현재 단어');

  return (
    <div className='w-full flex flex-col gap-4 items-center dark:text-white p-4'>
      {!onTest && !isTestEnd ? (
        <StartTest
          wordsArray={wordsArray}
          handleStartTest={handleStartTest}
          handleCurrentWords={handleCurrentWords}
          onSelect={onSelect}
        />
      ) : (
        <>
          {currentWord && (
            <>
              <button onClick={handleResetTest} className='btn btn-sm absolute top-2 right-2'>
                탈주
              </button>
              <form action='' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-24'>
                <p className='text-xl text-center'>
                  {questionNumber}/{initialLists.length}
                </p>
                <div className='flex gap-4 items-center justify-center'>
                  <p className='text-xl text-center'>{currentWord.word}</p>
                  <div className='tooltip' data-tip={currentWord.meaning}>
                    <img src={InfoIcon} alt='힌트' className='size-6' />
                  </div>
                </div>
                <div className='flex gap-2'>
                  <input
                    type='text'
                    placeholder='정답'
                    className='input input-bordered input-md text-[16px]'
                    onChange={handleAnswer}
                    value={answer}
                  />
                  <button type='submit' className='btn btn-md'>
                    제출
                  </button>
                </div>
              </form>
            </>
          )}
        </>
      )}
      {!onTest && isTestEnd && (
        <TestResult
          totalLength={initialLists.length}
          isShow={isShow}
          correct={correct}
          incorrect={incorrect}
          handleNoteShow={handleNoteShow}
          handleResetTest={handleResetTest}
        />
      )}
    </div>
  );
};

export default Test;
