import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Package from './Pages/Package';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/daftar-paket' element={<Package />} />
          <Route path='/tentang-kami' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
