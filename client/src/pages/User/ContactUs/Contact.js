import React from 'react'

import Map1 from "../images/Map1.png";
import Map2 from "../images/Map2.png";

function Contact() {
  return (
    <div>
      <div className="jss46">
        <div className="animation-bottom-top" style={{margin: "40px 0",minHeight: "250px", minWidth: "60%", boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", marginBottom: "50px",}}>
          <div className="MuiGrid-root animation-bottom-top MuiGrid-container" style={{padding: "20px"}}>
            <div className="MuiGrid-root jss48 MuiGrid-item MuiGrid-grid-sm-6">
              <span className="jss49">PGR-Delhi Office Address</span>
              <div>Praedico Global Research.Pvt.Ltd Udyog Vihar, Phase 4,</div>
              <div>Gurgaon-122015</div>
              <div> 
                <i className="fas fa-phone"></i> 
                 +91-9009054508, +91-9999703728
              </div>
              <div> 
                <i className="fas fa-envelope"></i> 
                admin@priyankgupta.co.in
              </div>
              <div> 
                <i className="fas fa-envelope"></i> 
                services@praedicoglobalresearch.com
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-6">
              <img src={Map1} alt="google map" style={{width: "100%", height: "250px"}}/>
            </div>
          </div>
        </div>
        <div className="animation-bottom-top" style={{minHeight: "250px", minWidth: "60%", boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px", marginBottom: "50px"}}>
          <div className="MuiGrid-root animation-bottom-top MuiGrid-container" style={{padding: "20px"}}>
            <div className="MuiGrid-root jss48 MuiGrid-item MuiGrid-grid-sm-6">
              <div className="jss49">
                PGR-Delhi Office Address
              </div>
              <div>
                First Floor, Garima Arcade,
              </div>
              <div>
                Gwalior-474001
              </div>
              <div> 
                <i className="fas fa-phone"></i> 
                +91-9009054508, +91-9999703728
              </div>
              <div> 
                <i className="fas fa-envelope"></i> 
                admin@priyankgupta.co.in
              </div>
              <div> 
                <i className="fas fa-envelope"></i> 
                services@praedicoglobalresearch.com
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-sm-6">
              <img src={Map2} alt="google map" style={{width: "100%",height: "250px"}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
