import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Home from "./Pages/Home";
import Packages from "./Pages/Packages";
import SignUp from "./Pages/SignUp";
import AdminHome from "./Admin/AdminPages/AdminHome";
import AdminSignUp from "./Admin/AdminPages/AdminSignUp";
import Login from "./Pages/Login";
import CreatePackage from "./Admin/AdminPages/CreatePackage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/adminSignup" element={<AdminSignUp />} />
          <Route path="/createPackage" element={<CreatePackage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
