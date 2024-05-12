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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
