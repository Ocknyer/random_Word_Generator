import React from 'react';
import { getDoc, doc, query, collection, orderBy, getDocs } from 'firebase/firestore';
import { fireStore } from '../firebase/firebase';
import { formatTimeStamp } from '../utils/utils';

const useGetWordList = (day) => {
  const [wordList, setWordList] = React.useState([]);
  const [dayList, setDayList] = React.useState([]);
  const [id, setId] = React.useState();

  const getWords = async () => {
    const q = query(collection(fireStore, day));

    const querySnapshot = await getDocs(q);

    // console.log()

    const data = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: Number(doc.id),
        createdAt: formatTimeStamp(doc.data().createdAt.toDate()),
        updatedAt: formatTimeStamp(doc.data().updatedAt.toDate()),
      };
    });

    // const dayArray = data.map((item) => item.day);

    console.log(data, 'data');

    const sortedData = data.sort((a, b) => a.id - b.id);

    setWordList(sortedData);

    if (data[data.length - 1]?.id) {
      return data[data.length - 1].id;
    } else {
      return 0;
    }
  };

  const getDays = async () => {
    const q = query(collection(fireStore, 'dayArray'));
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => {
      // console.log(doc.data().dayArray, 'data');

      return doc.data().dayArray;
    });

    setDayList(data[0]);
  };

  React.useEffect(() => {
    if (day) {
      getWords().then((id) => {
        const newId = id + 1;
        console.log(newId);

        setId(String(newId));
      });
      getDays();
    }
  }, [day, id]);

  return { wordList, dayList, id, getWords, getDays, setId };
};

export default useGetWordList;
