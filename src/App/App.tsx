import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import 'normalize.css';
import './styled';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

