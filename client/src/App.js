import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Admin from './pages/Admin/Admin'
import Navbar from './Components/User/Navbar'
import Footer from './Components/Footer'
import Home from './pages/User/Home/Home'
import Homeadmin from './pages/Admin/Home'
import Signin from './pages/Signin '
import Signup from './pages/Signup'
import Stocks from './pages/User/Stocks'
import EditUser from './pages/User/EditUser'
import Forgot from './pages/User/Forgot/Forgot'
import Changepassword from './pages/User/Changepassword/Changepassword'
import FeedbackA from './pages/Admin/Feedback/Feedback'
import About from  './pages/User/AboutUs/About'
//import Feedback from  './pages/User/Feedback/Feedback'
import Contact from  './pages/User/ContactUs/Contact'
import PeerComparison from './pages/User/PeerComparison/PeerComparison'
import RiskProfiler from './pages/User/RiskProfiler/RiskProfiler'
import CompanySearch from './pages/User/CompanySearch/CompanySearch'



const App = () => {
    return (

        <div>
            <BrowserRouter>
                <Navbar/>
                <Routes>

                    {/* User Routes */}
                    <Route exact path='/' element={<Home />} />

                    
                    <Route path='/aboutus' element={<About />} />
                    <Route path='/contactus' element={<Contact />} />
                  

                    <Route path='/signin' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />

                    <Route path='/stocks' element={<Stocks />} />
                    <Route path='/edit' element={<EditUser />} />
                    <Route path='/forgot' element={<Forgot />} />
                    <Route path='/peercomparison' element={<PeerComparison />} />
                    <Route path='/changepassword' element={<Changepassword />} />
                    <Route path='/riskprofiler' element={<RiskProfiler />} />
                    <Route path='/companyfinder' element={<CompanySearch />} />
                    {/*<Route path='/Feedback' element={<Feedback />} />*/}


                    {/* Admin Routes */}

                    <Route exact path='/admin/' element={<Homeadmin />} />
                    <Route exact path='/admin/feedback' element={<FeedbackA />} />


                    <Route exact path='/*' element={<div>Page Not Found- App</div>}  />
                    

                </Routes>
                <Footer />
            </BrowserRouter>
        </div>

    )
}

export default App;