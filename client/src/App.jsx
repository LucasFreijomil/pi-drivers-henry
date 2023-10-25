import "./App.css";
import LandingPage from "./views/Landing/LandingPage";
import NavBar from "./components/NavBar/Navbar";
import CardList from "./components/CardList/CardList";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Footer from "./components/Footer/Footer";

function App() {
  const { pathname } = useLocation();
  const [drivers, setDrivers] = useState([]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/drivers/${id}`);

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
        <Route exact path="/home" element={<CardList drivers={drivers} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Form />} />
      </Routes>
    </div>
  );
  // {pathname !== "/" && <Footer />}
}

export default App;
