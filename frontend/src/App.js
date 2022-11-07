import './App.css';
import { Routes,Route } from 'react-router-dom';

import Home from './Home/Home';
import FirstHome from './Home/FirstHome';
import UserRegister from './UserRegister/UserRegister';
import UserLogin from './UserLogin/UserLogin';
import TopUpCard from './TopUpCard/TopUpCard';
import Dashboard from './Admin/Dashboard';
import Projects from './Admin/TimeTable/AddTimetable';
import AddRoute from './Admin/Route/AddRoute';
import ViewAllRoute from './Admin/Route/ViewAllRoute';
import ViewAllTimeTable from './Admin/TimeTable/ViewAllTimeTable';

function App() {
  return (

    <Routes>
      <Route>

        <Route path='/' element={<FirstHome/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/UserRegister' element={<UserRegister/>} />
        <Route path='/UserLogin' element={<UserLogin/>} />
        <Route path='/TopUpCard' element={<TopUpCard/>} />
        <Route path='/adminDashboard' element={<Dashboard/>} />
        <Route path='/admin/addTimeTable' element={<Projects/>} />
        <Route path='/admin/addroute' element={<AddRoute/>} />
        <Route path='/admin/routes' element={<ViewAllRoute/>} />
        <Route path='/admin/timetables' element={<ViewAllTimeTable/>} />

      </Route>
    </Routes>
  );
}

export default App;
