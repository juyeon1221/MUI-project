import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Recover from './components/Recover';
import Confirm from './components/Confirm';
import Home from './components/Home';

  function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/confirm" element={<Confirm />} /> 
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
