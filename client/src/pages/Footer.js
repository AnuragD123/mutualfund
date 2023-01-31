import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="bg-dark text-light text-center text-lg-start">
                {/* Copyright */}
                <div className="text-center p-3" >
                    © {new Date().getFullYear()} Copyright:
                    <Link className="text-light" to="#">Praedico Global</Link>
                </div>
                {/* Copyright */}
            </footer>
        </div>
    )
}

export default Footer
