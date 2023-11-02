import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/NavUI/Navbar";
import HomePage from "./Home";
import Profile from "./Profile";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/NavUI/Footer";
import PageNotFound from "../components/404Err/PageNotFound";

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
              <Route path="/404" element={<PageNotFound />}  />
              <Route path="*" element={<Navigate to="/404" />}  />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Layout