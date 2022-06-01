import React from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import NuevoPersonaje from "./components/NuevoPersonaje";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from "./redux/store";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/personaje/nuevo' element={<NuevoPersonaje/>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
