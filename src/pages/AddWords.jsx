import React from 'react';
import useGetWordList from '../hooks/useGetWordList';
import { fireStore } from '../firebase/firebase';
import { addDoc, collection, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore';
import WordList from '../components/WordList';
import DaySelector from '../components/DaySelector';
import WordForm from '../components/WordForm';

const AddWords = () => {
  const [day, setDay] = React.useState('day1');
  const [newDay, setNewDay] = React.useState('');
  const [onEdit, setOnEdit] = React.useState(false);

  const { wordList, dayList, id, getWords, getDays, setId } = useGetWordList(day);

  const initialValue = {
    word: '',
    mean: '',
    memo: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const newInitialValue = {
    word: '',
    mean: '',
    memo: '',
  };

  const [inputValue, setInputValue] = React.useState(initialValue);
  const [newInputValue, setNewInputValue] = React.useState(newInitialValue);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleNewInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value, 'vadf');
    setNewInputValue({
      ...newInputValue,
      [name]: value,
    });
  };

  const handleNewDayName = (e) => {
    const value = e.target.value;
    setNewDay(value);
  };

  const handleCreateNewDay = async (e) => {
    // e.preventDefault();

    if (newDay.length) {
      await setDoc(doc(fireStore, 'dayArray', 'uxZGjY5z4tMqvtszKysy'), { dayArray: [...dayList, newDay] })
        .then(() => {
          setNewDay('');
          document.getElementById('day_modal').close();
          alert('새로운 단어장이 추가되었습니다.');
          getDays();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('이름을 입력해주세요.');
    }
  };

  // 단어 생성
  const handleSubmitForm = async (e) => {
    if (!inputValue.word.length || !inputValue.mean.length) {
      alert('필수값을 입력해 주세요.');
      return;
    }
    e.preventDefault();
    await setDoc(doc(fireStore, day, id), { ...inputValue })
      .then(() => {
        setInputValue(initialValue);

        getWords().then((id) => {
          const newId = id + 1;
          console.log(id, 'id');
          setId(String(newId));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 단어 삭제
  const handleDeleteWord = async (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('정말 삭제하시겠습니까?')) {
      console.log(id);
      await deleteDoc(doc(fireStore, day, id.toString())).then(() => {
        alert('삭제 되었습니다.');
        getWords();
        document.getElementById(id).close();
      });
    } else {
      return;
    }
  };

  // 수정 input open
  const handleEditState = (e) => {
    setOnEdit((prev) => !prev);
    console.log(onEdit);
  };

  // 단어 수정
  const handleEditWord = async (e, id) => {
    e.preventDefault();

    const docRef = doc(fireStore, day, String(id));
    let response;
    try {
      response = await updateDoc(docRef, { ...newInputValue, updatedAt: new Date() });
      getWords();
      setNewInputValue(newInitialValue);
      document.getElementById(id).close();
    } catch (error) {
      alert('수정할 수 없습니다.');
    }
  };

  return (
    <div className='p-4 pb-16'>
      <DaySelector
        dayList={dayList}
        setDay={setDay}
        handleCreateNewDay={handleCreateNewDay}
        newDay={newDay}
        handleNewDayName={handleNewDayName}
      />
      <WordList
        wordList={wordList}
        onEdit={onEdit}
        handleEditState={handleEditState}
        newInputValue={newInputValue}
        handleNewInput={handleNewInput}
        handleEditWord={handleEditWord}
        handleDeleteWord={handleDeleteWord}
      />
      <WordForm inputValue={inputValue} handleInput={handleInput} handleSubmitForm={handleSubmitForm} />
      {/* <form className='flex flex-col gap-2'>
        <input
          type='text'
          name='word'
          value={inputValue.word}
          className='input input-bordered'
          placeholder='단어'
          onChange={handleInput}
          required
        />
        <input
          type='text'
          name='mean'
          value={inputValue.mean}
          className='input input-bordered'
          placeholder='뜻'
          onChange={handleInput}
          required
        />
        <textarea
          type='text'
          name='memo'
          value={inputValue.memo}
          className='textarea textarea-bordered text-base'
          placeholder='메모'
          onChange={handleInput}
        />
        <button
          className='btn'
          disabled={!inputValue.word.length || !inputValue.mean.length}
          onClick={handleSubmitForm}
        >
          추가
        </button>
      </form> */}
    </div>
  );
};

export default AddWords;
