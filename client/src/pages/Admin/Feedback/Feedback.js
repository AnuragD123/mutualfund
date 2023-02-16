import React, { useEffect, useState } from 'react'

// import { useNavigate } from 'react-router-dom';

function Feedback() {

  const [data, setData] = useState([]);

  // const navigate = useNavigate()
  const fetchData = async () => {
    const responceFetch = await fetch('http://localhost:1337/api/user/fetchfeedbackdata');
    const resJSON = await responceFetch.json();
    console.log(resJSON);
    setData(resJSON.data)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const disapprove = async (e) => {

    let id = e.target.value;
    let response = await fetch('http://localhost:1337/api/user/disapprovefeedback', {
      method: 'POST',
      body: JSON.stringify({id}),
      headers: { 
        'Content-type': 'application/json'
      }
    });
    let jsonRes = await response.json();

    if(jsonRes.success){
      fetchData();
      // alert("Permission Status Changed!!")
      
    }
    
  
  }
  const approve = async(e) => {
    let id = e.target.value;
    let response = await fetch('http://localhost:1337/api/user/approvefeedback', {
      method: 'POST',
      body: JSON.stringify({id}),
      headers: { 
        'Content-type': 'application/json'
      }
    })
    let jsonRes = await response.json();

    if(jsonRes.success){
      fetchData();
      // alert("Permission Status Changed!!")
      
    }
  }

  return (
    <div className='container my-5 table-responsive-sm'>

      <table className="table table-striped table-responsive">
        <thead className='table-dark'>
          <tr>

            <th >Name</th>
            <th >Email</th>
            <th >Rating</th>
            <th >Message</th>
            <th >Status</th>
            <th >Action</th>
            
            
          </tr>
        </thead>
        <tbody>
          {data.map((d) => {
            return (
              <tr key={d._id}>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.rating}</td>
                <td>{d.message}</td>
                <td>{d.approved==="true"?"Approved":"Not Approved"}</td>
                <td>
                  {d.approved==="false"?<button value={d._id} onClick={approve} className='btn btn-primary'>Approve</button>:""}
                  {d.approved==="true"?<button value={d._id} onClick={disapprove} className='btn btn-danger'>Disapprove</button>:""}
                  
                  </td>
              </tr>
            )
          })}


        </tbody>
      </table>

      <ul>


      </ul>

    </div>
  )
}

export default Feedback
