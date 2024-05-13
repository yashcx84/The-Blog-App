import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Welcome from "./Screens/Welcome";
import Blog from "./Screens/Blog";
import Docs from "./Screens/Docs";
import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Forget from "./Screens/Forget";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Forget" element={<Forget />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
