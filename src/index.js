import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./Registration/Register";
import Ranking from "./Ranking/Ranking";
import About from "./About/About";
import Game from "./Game/Game";
import GameKonva from "./Game/GameKonva";
import Rules from "./Game/Rules/Rules";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={'/AstronautGame/:id'} element={<App/>}></Route>
              <Route path={'/AstronautGame/Register:id'} element={<Register/>} ></Route>
              <Route path={'/AstronautGame/Ranking:id'} element={<Ranking/>}></Route>
              <Route path={'/AstronautGame/About:id'} element={<About/>}></Route>
              <Route path={'/AstronautGame/Game:id'} element={<Game/>}></Route>
              <Route path={'/AstronautGame/Rules:id'} element={<Rules/>}></Route>
              <Route path={'/AstronautGame/match:id'} element={<GameKonva/>}></Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
