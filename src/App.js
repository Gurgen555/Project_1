import { BrowserRouter, NavLink, Route,  Routes } from "react-router-dom"; 
import './App.css';
import Navbar from './Components/Navbar';
import Home from  '../src/Components/Pages/Home'
import Services from "./Components/Pages/Services";
import Product from "./Components/Pages/Product";
import SignUp from "./Components/Login/SignUp";
import Register from "./Components/Login/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}  />
          <Route path="/services" element={<Services/>} />
          <Route path="/products" element={<Product/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
