import {Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import TodoWrapper from './components/TodoWrapper';
import WeatherWrapper from './components/WeatherWrapper';
import FrontPage from "./components/FrontPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element ={<FrontPage />}/>
          <Route path='tareas-app' element = {<TodoWrapper />} />
          <Route path='weather-app' element = {<WeatherWrapper />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App