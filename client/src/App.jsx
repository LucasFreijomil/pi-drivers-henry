import "./App.css";
import LandingPage from "./views/Landing/LandingPage";
import NavBar from "./components/NavBar/Navbar";
import HomePage from "./views/Home/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer/Footer";

function App() {
  const { pathname } = useLocation();
  const [drivers, setDrivers] = useState([]);

  const onSearch = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/drivers/${id}`
      );

      const { data } = response;

      if (data.name) {
        setDrivers((oldDrivers) => [...oldDrivers, data]);
      } else {
        window.alert("¡No hay pilotos con este ID!");
      }
    } catch (error) {
      console.error("Error al buscar el piloto:", error);
    }
  };

  return (
    <div className="App">
      {pathname !== "/" && <NavBar onSearch={onSearch} />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage drivers={drivers} />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
