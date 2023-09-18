import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.css";
import Header from "./components/user/header/Header";
import Slide from "./components/user/slider/Slide";
import HomePage from './pages/user/homePage/HomePage';
import ListProduct from './pages/user/listProduct/ListProduct';
import Cart from './pages/user/cart/Cart';
import About from './pages/user/about/About';
import Contact from './pages/user/contact/Contact';
import Login from './pages/user/login/Login';
import Register from './pages/user/register/Register';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list-product" element={<ListProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App