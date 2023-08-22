import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/form" element={Form} />
        </Routes>
    </div>
  );
}

export default App;
