import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const Stocks = () => {
  
  const navigate = useNavigate();
  const [data, setdata] = useState([])


  async function populate() {
    const response = await fetch('http://localhost:1337/api/user/fetchdata', {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    })
    const dataRes = await response.json()
    // console.log(dataRes)
       setdata([...dataRes.Company_Name])
       //console.log(dataRes.Company_Name);
       console.log(data);

    // console.log(data.data)
    // if (data.status === 'ok') {
    //   //console.log(data)
    //   setinfo({ ...data.data })

    // }
    // else {
    //   //console.log(data.error);
    //   console.log('data nhi aya');
    //   alert('you are not approved')
    // }

  }

  useEffect(() => {

    const token = localStorage.getItem('token');
    const user = decodeToken(token)
    if (!user) {
      localStorage.removeItem('token')
      navigate('/')
    }
    else {
      //console.log(user.isadmin)
      populate();
    }

  }, [])

  // console.log(info);

  return (

    <div className="container mt-5 pt-5">
      <table className="table table-striped table-bordered table-responsive">
        <thead className="table-dark">
          <tr>
            {/* <th>S.No</th> */}
            <th>Name</th>
            <th>Percentage Gain</th>
            <th>Change</th>
            <th>Prev Close</th>
            <th>Last Price</th>
            <th>Low</th>
            <th>High</th>
          </tr>
        </thead>
        <tbody>
            
            {data.map((d)=>{
              
               return(
                <tr>
                  {/* <td>{}</td> */}
                  <td>{d.name}</td>
                  <td>{d.Percentage_Gain}</td>
                  <td>{d.Change}</td>
                  <td>{d.Prev_Close}</td>
                  <td>{d.Last_Price}</td>
                  <td>{d.Low}</td>
                  <td>{d.High}</td>
                </tr>
               )
            })}
           
          
        </tbody>
      </table>
    </div>

  )
  
}

export default Stocks;

