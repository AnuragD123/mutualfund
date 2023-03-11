import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaStar} from "react-icons/fa";

function Navbar() {




    /* Feedback model */
    const colors = {
      orange: "#FFBA5A",
      grey: "#a9a9a9"
    }
    const handleOpenModal = (e) => {
        e.preventDefault()
      setIsModalOpen(true);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const FeedbackModal = () => {
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
      const stars = Array(5).fill(0);
      const [currentValue, setCurrentValue] = React.useState(0);
      const [hoverValue, setHoverValue] = React.useState(undefined);
      const handleClick = value => {
        setCurrentValue(value)
      };
    
      const handleMouseOver = value => {
        setHoverValue(value)
      }
    
      const handleMouseLeave = value => {
        setHoverValue(undefined)
      }
      return (
        <div>
          
  
          
          {isModalOpen && (
            <div style={modalStyles}>
              <div style={modalHeaderStyles}>
                
                <div style = {styles.container}>
                <h3 style={space}>Leave a Feedback</h3>
                <div style={styles.stars}>
                  {stars.map((_, index) => {
                    return (
                  <FaStar key = {index} size = {24} style = {
                  {
                    marginRight: 10,
                    cursor: "pointer",
                  }
                }
                color={(hoverValue || currentValue)> index ? colors.orange : colors.grey}
                onClick={() => handleClick(index + 1)}
                onMouseOver={()=>handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                />
              )
            })}
          </div>
        </div>
                <button onClick={handleCloseModal}>x</button>
              </div>
              <form>
              <textarea
            placeholder="Write your feedback..."
            style={styles.textarea}
          />
                <button style={styles.button}>Submit</button>
              </form>
            </div>
          )}
        </div>
      );
    };
    
    const modalStyles = {
      position: "fixed",
      zIndex: 50,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)"
    };
    
    const modalHeaderStyles = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px"
    };
    
    const space = {
      margin: "40px 0",
    };
    
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
      },
      stars: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
      },
      textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: "5px",
        width: "100%",
        margin: "20px 0",
        minHeight: "100px",
        padding: "10px",
      },
      button: {
        border: "none",
        borderRadius: "5px",
        width: "100%",
        padding: "10px",
        backgroundColor: "#FFBA5A",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
      },
    };
    

    function handlelogout() {
        localStorage.removeItem("token");

    }





    return (
        <div>
            <FeedbackModal/>

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
                        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                            MutualFund
                        </Link>
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">



                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/stocks">Stocks</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">About Us</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">Contact Us</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={handleOpenModal} to="#">Feedback</Link>
                                
                            </li>
                            {

                                localStorage.getItem('token') ? ''
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signin">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signup">Register</Link>
                                        </li>

                                    </>
                            }



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
