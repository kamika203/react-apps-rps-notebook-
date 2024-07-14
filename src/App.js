import React from "react";
import RPS from './comps/RPS'
import Note from './comps/Note'
import Page from './comps/Page'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page />}/>
      <Route path='/rps' element={<RPS />}/>
      <Route path='/note' element={<Note />}/>
    </Routes>
    </BrowserRouter>  
  );
}

export default App;
