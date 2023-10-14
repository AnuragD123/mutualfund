import React from 'react'
import './About.css'
import imgmf from '././mutualfund.jpg'
function About() {
  return (
    <div className="about-area">
    <div className="container" >
        <div className="row">
            <div className="col-lg-4">
                <div className="about-img">
                    <img src={imgmf} alt=""/>
                </div>
            </div>
            <div className="col-lg-6 col-lg-offset-1">
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>The most important step in picking the best mutual funds is to focus on getting the mutual funds that fit into your needs. Once that is done, the second step is to evaluate alternate options. You need to create a mutual fund portfolio that has the right mix of equity funds, debt funds, liquid funds, variable funds etc. This mix needs to be tweaked consistently based on the external and internal stimuli</p>
                    <a href="/">Check out our Product</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About
