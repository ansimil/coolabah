import './App.css';
import Homepage from './pages/Homepage';
import GetQuote from './pages/GetQuote/GetQuote';
import { Route, Routes } from 'react-router-dom';
import Quote from './pages/Quote/Quote';
import { useState } from 'react';

function App() {
  const [coverageRef, setCoverageRef] = useState(null)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage coverageRef={coverageRef} setCoverageRef={setCoverageRef} />}></Route>
        <Route path="/get-quote" element={<GetQuote />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
