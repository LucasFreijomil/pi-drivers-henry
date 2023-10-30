import "./App.css";
import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/Navbar";
import Home from "./views/Home/Home";
import DriverDetail from "./views/Detail/Detail";
import CreateDriver from "./views/CreateDriver/CreateDriver";
import { Route, Routes, useLocation } from "react-router-dom";
// import Footer from "./components/Footer/Footer";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<DriverDetail />} />
        <Route path="/create" element={<CreateDriver />} />
      </Routes>
      {/* {pathname !== "/" && <Footer />} */}
    </div>
  );
}

export default App;
