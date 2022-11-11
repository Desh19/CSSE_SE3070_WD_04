import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import TimeTable from "./pages/TimeTable";
import TravelHistory from "./pages/TravelHistory";
import CreditBalance from "./pages/CreditBalance";
import Qrcode from "./pages/Qrcode";
import BusLocation from "./pages/BusLocation";
import Logout from "./components/Logout";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import ViewAllTimeTable from "./pages/ViewAllTimeTable";
import AddTimetable from "./pages/AddTimetable";
import ViewAllRoute from "./pages/ViewAllRoute";
import AddRoute from "./pages/AddRoute";
import UserProfiles from "./pages/UserProfiles";
import UpdateTimetable from "./pages/UpdateTimetable";

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
          <Route path="/timetable" element={<TimeTable/>} />
          <Route path="/travhist" element={<TravelHistory/>} />
          <Route path="/credbal" element={<CreditBalance/>} />
          <Route path="/qr" element={<Qrcode/>} />
          <Route path="/busloc" element={<BusLocation/>} />
          <Route path="/admin/dashboard" element={<Dashboard/>} />
          <Route path="/admin/timetables" element={<ViewAllTimeTable/>} />
          <Route path="/admin/addtimetables" element={<AddTimetable/>} />
          <Route path="/admin/routes" element={<ViewAllRoute/>} />
          <Route path="/admin/addroute" element={<AddRoute/>} />
          <Route path="/admin/userprofiles" element={<UserProfiles/>} />
          <Route path="/admin/Updatetime/:id" element={<UpdateTimetable/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
