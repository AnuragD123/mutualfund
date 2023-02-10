import React from 'react'
import {Route,Routes} from 'react-router-dom'

import Navbar from '../../Components/Navbar'
import Signin from './../Signin '
import Signup from '../Signup'
import Profile from './Profile'
import EditUser from './EditUser'
import Forgot from './Forgot/Forgot'
import Changepassword from './Changepassword/Changepassword'
import Home from './Home/Home'



function User() {
    return (
        <div>

            <Navbar/>
            <Routes>
                
                <Route path='/' exact element={<Home/>} />
                <Route path='/signin' exact element={<Signin />} />
                <Route path='/signup' element={<Signup />} />

                <Route path='/profile' element={<Profile />} />
                <Route path='/edit' element={<EditUser />} />
                <Route path='/forgot' element={<Forgot />} />
                <Route path='/changepassword' element={<Changepassword />} />
            </Routes>
        </div>
    )
}

export default User
