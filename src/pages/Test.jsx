import React from 'react';
import _ from 'lodash';
import TestResult from '../components/TestResult';
import StartTest from '../components/StartTest';
import { InfoIcon, VolumeIcon } from '../assets/icons/index';
import { getSpeech } from '../utils/utils';
import useGetWordList from '../hooks/useGetWordList';

const Test = () => {
  const [day, setDay] = React.useState('day1');
  const [questionNumber, setQuestionNumber] = React.useState(1);
  const [onTest, setOnTest] = React.useState(false);
  const [isTestEnd, setIsTestEnd] = React.useState(false);
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

  const { wordList, dayList } = useGetWordList(day);

  const handleStartTest = () => {
    setOnTest(true);
  };

  React.useEffect(() => {
    if (onTest) {
      setCurrentWordsList({ ...wordList });
      setCurrentWord(wordList[Math.floor(Math.random() * wordList.length)]);
    }

    if (wordList.length) {
      if (questionNumber === wordList.length + 1) {
        setOnTest(false);
        setIsTestEnd(true);
      }
    }
  }, [onTest, questionNumber, wordList]);

  React.useEffect(() => {
    const filtered = _.filter(currentWordsList, function (item) {
      return item.id !== currentWord.id;
    });

    // console.log(filtered, '필터링');
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

    if (questionNumber <= wordList.length) {
      setQuestionNumber((prev) => prev + 1);
    }

    if (currentWord.mean.split(',').includes(answer)) {
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

  const handleResetTest = (e) => {
    e.preventDefault();
    setQuestionNumber(1);
    setOnSelect(false);
    setOnTest(false);
    setIsTestEnd(false);
    setCorrect([]);
    setIncorrect([]);
    setIsShow({ correctShow: false, incorrectShow: false });
  };

  // console.log(questionNumber, '넘버', wordList.length + 1, 'length');
  // console.log(correct, incorrect, '오답노트');
  // console.log(onTest, isTestEnd, '온테 이테');
  // console.log(currentWordsList, '리스트');
  // console.log(currentWord, '현재 단어');
  // console.log(wordList, 'wordList');

  return (
    <div className='w-full h-dvh flex flex-col gap-4 items-center dark:text-white p-4'>
      {!onTest && !isTestEnd ? (
        <StartTest
          dayList={dayList}
          handleStartTest={handleStartTest}
          setDay={setDay}
          onSelect={onSelect}
          setOnSelect={setOnSelect}
        />
      ) : onTest && !isTestEnd ? (
        <>
          {currentWord && (
            <>
              <button onClick={(e) => handleResetTest(e)} className='btn btn-sm absolute top-2 right-2'>
                탈주
              </button>
              <form
                action=''
                onSubmit={(e) => handleSubmit(e)}
                className='flex flex-col gap-4 mt-24 w-full items-center'
              >
                <p className='text-xl text-center'>
                  {questionNumber}/{wordList.length}
                </p>
                <div className='flex gap-4 items-center justify-center'>
                  <p className='text-xl text-center'>{currentWord.word}</p>
                  <div className='tooltip' data-tip={currentWord.mean}>
                    <img src={InfoIcon} alt='힌트' className='size-6 dark:invert' />
                  </div>
                </div>
                <div className='flex gap-2 w-full justify-center'>
                  <input
                    type='text'
                    placeholder='정답'
                    className='input input-bordered input-md text-[16px] w-52'
                    onChange={handleAnswer}
                    value={answer}
                  />
                  <button type='submit' className='btn btn-md'>
                    제출
                  </button>
                </div>
              </form>
              <button onClick={(e) => getSpeech(e, currentWord.word)} className='w-6 h-6'>
                <img src={VolumeIcon} alt='발음 듣기' className='w-6 h-6 dark:invert' />
              </button>
            </>
          )}
        </>
      ) : !onTest && isTestEnd ? (
        <TestResult
          totalLength={wordList.length}
          isShow={isShow}
          correct={correct}
          incorrect={incorrect}
          handleNoteShow={handleNoteShow}
          handleResetTest={handleResetTest}
        />
      ) : null}
    </div>
  );
};

export default Test;
