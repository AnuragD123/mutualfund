import React from 'react'
import { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';


function Feedback() {

  const [data, setData] = useState([]);

  // const navigate = useNavigate()
  const fetchData = async () => {
    const responceFetch = await fetch('http://localhost:1337/api/user/fetchfeedbackdatauser');
    const resJSON = await responceFetch.json();

    // console.log(resJSON);

    setData(resJSON.data)
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (

    <div className='container mb-5 mt-5'>
      <section style={{color: "#000", backgroundColor: "#f3f2f2"}}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
              <h3 className="fw-bold mb-4">Feedbacks</h3>
              <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                quisquam eum porro a pariatur veniam.
              </p>
            </div>
          </div>

          <div className="row text-center">

            {data.map((d) => {
              return(

              <div key={d._id} className="col-md-4 mb-4 mb-md-0">
                <div className="card">
                  <div className="card-body py-4 mt-2">
                    <div className="d-flex justify-content-center mb-4">
                      {/* <img alt='userimage' src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                        className="rounded-circle shadow-1-strong" width="100" height="100" /> */}
                        <div className="icon border border-5 border-success rounded-circle text-success " style={{width:"120px",height:"120px",display:"flex", alignItems:"center", justifyContent:"center"}}>
                          <i class="fa fa-user display-2 fa-2xl " aria-hidden="true"></i>

                        </div>
                    </div>
                    <h5 className="font-weight-bold">{d.name}</h5>
                    {/* <h6 className="font-weight-bold my-3">Founder at ET Company</h6> */}
                    <Rating name="read-only" value={d.rating} readOnly />
          
                    <p className="mb-2">
                      <i className="fas fa-quote-left pe-2"></i>{d.message}
                    </p>
                  </div>
                </div>
              </div>
              )
            })}

          </div>
        </div>
      </section>
    </div>
  )
}

export default Feedback
