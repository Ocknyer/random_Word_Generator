import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StampList from './components/StampList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stamp' element={<StampList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
