import React from 'react'



function Contact() {
  return (
    <div>
      

      <div className="container my-5 pt-5">
        <h3 className='text-center' ><b>Contact Us</b></h3><hr/>
        <div className="shadow aos-init aos-animate" style={{ padding: "20px" }} data-aos="fade-right">
          <h4><b>Head Office</b></h4><hr />
          <div className="row">
            <div className="col-md-4">
              <b>Address</b>
              <p>Praedico Global Research.Pvt.Ltd
                <br />Udyog Vihar, Phase 4,
                <br />Gurgaon-122015
              </p>
              <p>mail@praedicoglobalresearch.com<br />praedicoglobalresearch@gmail.com</p>
              <p>+91 8319335916</p>
            </div>
            <div className="col-md-8">
              <iframe title='office-location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14025.647593290645!2d77.06657373193845!3d28.49725266953995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196b0d7637b3%3A0xef51ae0ebb2ad385!2sPhase%20IV%2C%20Udyog%20Vihar%2C%20Sector%2018%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1596003715628!5m2!1sen!2sin" width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
          </div>
        </div>
        <br />

        <div className="shadow aos-init aos-animate" style={{ padding: "20px" }} data-aos="fade-left">
          <h4><b>Data Center</b></h4><hr />
          <div className="row">
            <div className="col-md-4">
              <b>Address</b>
              <p>Praedico Global Research.Pvt.Ltd
                <br />First Floor, Garima Arcade,
                <br />Gwalior-474001
              </p>
              <p>mail@praedicoglobalresearch.com<br />praedicoglobalresearch@gmail.com</p>
              <p>+91 9009054508</p>
            </div>
            <div className="col-md-8">
              <iframe title='office-location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1789.8382053145033!2d78.16352807468999!3d26.20720267814431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c429171aa4ad%3A0xe18c9818b9f2639!2sGarima%20Arcade%2C%20Nogja%20Rd%2C%20Shinde%20Ki%20Chhawani%2C%20Gwalior%2C%20Madhya%20Pradesh%20474001!5e0!3m2!1sen!2sin!4v1596002123814!5m2!1sen!2sin" width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
