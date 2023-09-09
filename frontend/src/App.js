import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import About from './components/About/About';
import './styles/main.css';

function App() {

  const [data, setData] = useState([])
  
  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL)
  }, []); 

  useEffect(() => {
    async function fetchData() {
      console.log(process.env.REACT_APP_API_URL)
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}`);
        if(!Response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await Response.json();
        console.log(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
  })

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={Form} />
      </Routes>
    </div>
  );
}

export default App;
