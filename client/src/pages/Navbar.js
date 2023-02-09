import React from 'react'
import { Link} from 'react-router-dom'

function Navbar() { 

   
       function handlelogout()
       {
        localStorage.removeItem("token");
       
       }
   


    return (
        <div>
            
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Navbar brand */}
                        <Link className="navbar-brand mt-2 mt-lg-0" to="#">
                            MutualFund
                        </Link>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Projects</Link>
                            </li>
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    <div className="d-flex align-items-center">

                        {/* Avatar */}
                        <div className="dropdown">
                            <Link className="dropdown-toggle d-flex align-items-center hidden-arrow" to="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height={25} alt="Black and White Portrait of a Man" loading="lazy" />
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                                <li>
                                    <Link className="dropdown-item" to="/profile">My profile</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Settings</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" onClick={handlelogout} to='/signin'>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Right elements */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        
        </div>
    )
}

export default Navbar
