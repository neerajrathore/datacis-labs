import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import Homepage from "./Page/Homepage";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Services from "./Page/Services";
import Technologies from "./Page/Technologies";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:serviceId" element={<Services />} />
        <Route path="/technologies/:technologiesId" element={<Technologies />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
