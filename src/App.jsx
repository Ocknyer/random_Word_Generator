import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Words from './pages/Words';
import Test from './pages/Test';
import AddWords from './pages/AddWords';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/words' element={<Words />} />
      <Route path='/test' element={<Test />} />
      <Route path='/addwords' element={<AddWords />} />
    </Routes>
  );
};

export default App;
