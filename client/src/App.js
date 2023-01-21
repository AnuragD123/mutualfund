import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Admin from './pages/Admin'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import EditUser from './pages/EditUser';


const App=()=>{
    return (
       
        <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} />
        <Route path='register' element={<Register/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='admin'  element={<Admin/>}  />
        <Route path='edit' element={<EditUser/>} />
        </Routes>
        </BrowserRouter>
        </div>
        
    )
}

export default App;