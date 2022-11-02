import './App.css';
import { Routes,Route } from 'react-router-dom';

import Home from './Home/Home';
import FirstHome from './Home/FirstHome';
import UserRegister from './UserRegister/UserRegister';
import UserLogin from './UserLogin/UserLogin';
import TopUpCard from './TopUpCard/TopUpCard';

function App() {
  return (

    <Routes>
      <Route>

        <Route path='/' element={<FirstHome/>} />
        <Route path='/FirstHome' element={<Home/>} />
        <Route path='/UserRegister' element={<UserRegister/>} />
        <Route path='/UserLogin' element={<UserLogin/>} />
        <Route path='/TopUpCard' element={<TopUpCard/>} />

      </Route>
    </Routes>
  );
}

export default App;
