import { React, useState} from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';

import UserHome from './client/components/UserHome';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserHome />}/>
      </Routes>
    </div>
  );
}

export default App;
