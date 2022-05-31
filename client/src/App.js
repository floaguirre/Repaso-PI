import React from "react";
import Home from "./components/Home";

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from "./redux/store";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
