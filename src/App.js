import {Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import TodoWrapper from './components/TodoWrapper';
import WeatherWrapper from './components/WeatherWrapper';
import CryptoTracker from './components/CryptoTracker';
import FrontPage from "./components/FrontPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter basename = "/react-apps/">
        <Routes>
          <Route path='' element ={<FrontPage />}/>
          <Route path='tareas-app' element = {<TodoWrapper />} />
          <Route path='weather-app' element = {<WeatherWrapper />} />
          <Route path='crypto-track' element = {<CryptoTracker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
