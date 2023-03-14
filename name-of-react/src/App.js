
import './App.css';
import{useState} from'react'
import { BrowserRouter,
  Routes,
  Route,
  Link
}
from 'react-router-dom'
import Home from'./views/Home'
import Inventory from'./views/Inventory'
import Profile from'./views/Profile'

function App() {
  return(
    <BrowserRouter>
    <nav>
      <ul>
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Inventory">Inventory</Link>
        </li>
        <li>
        <Link to="/Profile">Profile</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/Inventory" element={<Inventory/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
