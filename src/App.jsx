import { Route, Link, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="text-3xl font-bold">
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}
