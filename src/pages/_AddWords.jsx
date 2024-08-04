import React from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { getDatabase, ref, set, push, get } from 'firebase/database';
import { db, rtdb } from '../firebase/firebase';
import wordsArray from '../data/words';

const AddWords = () => {
  const [day, setDay] = React.useState('day2');
  const [dayArray, setDayArray] = React.useState([]);

  const [words, setWords] = React.useState([]);
  const initialValue = {
    word: '',
    meaning: '',
    memo: '',
  };

  const [inputValue, setInputValue] = React.useState(initialValue);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const pushWord = async (e) => {
    e.preventDefault();
    setInputValue(initialValue);

    const docRef = push(ref(rtdb, `words/${day}`));
    set(docRef, inputValue)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getWords = async () => {
    const docRef = ref(rtdb, `words/`);
    const snapshot = await get(docRef);
    if (snapshot.exists()) {
      console.log(snapshot.val(), 'snap');
      setDayArray(Object.keys(snapshot.val()));
      setWords(Object.values(snapshot.val()));
    }
  };

  React.useEffect(() => {
    getWords();
  }, []);

  console.log(dayArray, 'dayArray');
  console.log(words, 'words');
  console.log(inputValue, 'value');

  return (
    <>
      <div className='p-4 h-dvh'>
        <select className='select select-bordered w-full max-w-sm mb-4' onChange={(e) => setDay(e.target.value)}>
          {dayArray.map((day, idx) => (
            <option value={day} key={idx}>
              {day}
            </option>
          ))}
        </select>
        <form className='flex flex-col gap-4' onSubmit={pushWord}>
          <input
            type='text'
            name='word'
            value={inputValue.word}
            className='input input-bordered'
            placeholder='단어'
            onChange={handleInput}
          />
          <input
            type='text'
            name='meaning'
            value={inputValue.meaning}
            className='input input-bordered'
            placeholder='뜻'
            onChange={handleInput}
          />
          <textarea
            type='text'
            name='memo'
            value={inputValue.memo}
            className='textarea textarea-bordered'
            placeholder='메모'
            onChange={handleInput}
          />
          <button className='btn'>완료</button>
        </form>
      </div>
      <div>
        {words.map((word, idx) => {
          return word.map((item) => {
            return (
              <div key={idx}>
                <h1>{item.word}</h1>
                <p>{item.meaning}</p>
                <p>{item.memo}</p>
              </div>
            );
          });
        })}
      </div>
    </>
  );
};

export default AddWords;
