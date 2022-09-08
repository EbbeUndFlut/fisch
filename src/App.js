import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Member from './pages/Member';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/member' element={<Member />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
