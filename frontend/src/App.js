import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';

import Home from './Home/Home';

function App() {
  return (

    <Routes>
      <Route>

        <Route path='/' element={<Home/>} />

      </Route>
    </Routes>
  );
}

export default App;
