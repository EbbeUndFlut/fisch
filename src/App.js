import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
<<<<<<< HEAD
import About from './pages/About'
=======
import Shop from './pages/Shop';
>>>>>>> shop

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
<<<<<<< HEAD
          <Route path='/about' element={<About />} />
=======
          <Route path='/shop' element={<Shop />} />
>>>>>>> shop
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
