import "./App.css";
import LandingPage from "./views/Landing/LandingPage";
import NavBar from "./components/NavBar/Navbar";
import HomePage from "./views/Home/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
        {pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
