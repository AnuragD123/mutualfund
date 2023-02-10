import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Admin from './pages/Admin/Admin'
import Navbar from './Components/User/Navbar'
import Footer from './Components/Footer'
import Home from './pages/User/Home/Home'
import Homeadmin from './pages/Admin/Home'
import Signin from './pages/Signin '
import Signup from './pages/Signup'
import Profile from './pages/User/Profile'
import EditUser from './pages/User/EditUser'
import Forgot from './pages/User/Forgot/Forgot'
import Changepassword from './pages/User/Changepassword/Changepassword'
import Feedback from './pages/Admin/Feedback/Feedback'




const App = () => {
    return (

        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>

                    <Route exact path='/' element={<Home />} />

                    

                    <Route path='/signin' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />

                    <Route path='/profile' element={<Profile />} />
                    <Route path='/edit' element={<EditUser />} />
                    <Route path='/forgot' element={<Forgot />} />
                    <Route path='/changepassword' element={<Changepassword />} />



                    {/* Admin Routes */}

                    <Route exact path='/admin/' element={<Homeadmin />} />
                    <Route exact path='/admin/feedback' element={<Feedback />} />


                    <Route exact path='/*' element={<div>Page Not Found- App</div>}  />
                    

                </Routes>
                <Footer />
            </BrowserRouter>
        </div>

    )
}

export default App;