import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaTemas from './components/categorias/listaCategorias/ListaCategorias';

function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/"/>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaTemas />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
);
}
export default App;