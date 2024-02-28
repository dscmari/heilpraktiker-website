import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Leistungen from "./views/Leistungen";

function App() {
  return (
    <div className="app">
      <header className="app-header">
      
        <Navbar></Navbar>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Leistungen />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
