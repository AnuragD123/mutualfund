import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Admin from './pages/Admin'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import Profile from './pages/Profile'

import EditUser from './pages/EditUser';
import Forgot from './pages/Forgot/Forgot';
import Signin from './pages/Signin ';
import Signup from './pages/Signup';
import Changepassword from './pages/Changepassword/Changepassword';


const App=()=>{
    return (
       
        <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>

        <Route path='/' element={ <Signin/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        {/* <Route path='/login' element={ <Login/>} />
        <Route path='/register' element={<Register/>} /> */}
        <Route path='/profile' element={<Profile/>} />
        <Route path='/admin'  element={<Admin/>}  />
        <Route path='/edit' element={<EditUser/>} />
        <Route path='/forgot' element={<Forgot/>}  />
        <Route path='/changepassword' element={<Changepassword/>}  />
        <Route path='/*' element={<div>Page Not Found</div>}  />
        

        </Routes>
        <Footer/>
        </BrowserRouter>
        </div>
        
    )
}

export default App;