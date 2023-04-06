import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "./Home";
import Profile from "./Profile";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
              <Route path="/" element={<HomePage />}  />
              <Route path="/home" element={<HomePage />}  />
              <Route path="/profile" element={<Profile />}  />
              <Route path="/projects" element={<Projects />}  />
              <Route path="/contact" element={<Contact />}  />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Layout