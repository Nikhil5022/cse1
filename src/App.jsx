import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Faculty from "./components/Faculty";
import StudentsCorner from "./components/StudentsCorner";
import CseClub from "./components/CseClub";
import Research from "./components/Research";
import AboutUs from "./components/AboutUs";
import Placements from "./components/Placements";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Programs from "./components/Programs";
import Contactus from "./components/Contactus";

function App() {
  return (
    <Router>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<StudentsCorner />} />
        <Route path="/cse-club" element={<CseClub />} />
        <Route path="/research" element={<Research />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contactus />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
