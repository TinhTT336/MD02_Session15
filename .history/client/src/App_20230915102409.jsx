import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.css";
import Header from "./components/user/header/Header";
import Slide from "./components/user/slider/Slide";
import HomePage from './pages/user/homePage/HomePage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
