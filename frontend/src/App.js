import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import TravelHistory from "./pages/TravelHistory";
import CreditBalance from "./pages/CreditBalance";
import Qrcode from "./pages/Qrcode";
import BusLocation from "./pages/BusLocation";
import Logout from "./components/Logout";
import LandingPage from "./pages/LandingPage";

//Assigning route paths to created pages

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/travhist" element={<TravelHistory/>} />
          <Route path="/credbal" element={<CreditBalance/>} />
          <Route path="/qr" element={<Qrcode/>} />
          <Route path="/busloc" element={<BusLocation/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
