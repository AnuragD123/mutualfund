import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Alert from 'react-bootstrap/Alert';
import Table from 'react-bootstrap/Table';

function Admin() {

    const [info, setinfo] = useState([])

    async function approve(id) {

        const response = await fetch('http://localhost:1337/api/admin/adminupdatedata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id
            })
        })

        const data = await response.json()
        console.log(data);
        if (data.status === 'ok') {
            document.getElementById(id).innerHTML = 'Approved'
        }

    }

    async function getdata() {

        let req = await fetch('http://localhost:1337/api/admin/admingetdata', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })

        let data = await req.json();

        console.log(data)
        if (data.status === 'ok') {

            await setinfo([...data.data])
            console.log(info)
            //setdata(info)


        }
        else {
            //console.log(data.error);
            console.log('data nhi aya');

        }
    }

    useEffect(() => {
        getdata();

    }, [])
    console.log(info)
    return (
        <div className='container pt-5 mt-5'>


            <h1 style={{ textAlign: 'center' }}>Admin Panel </h1>
            <br />
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Candidate's Name</th>
                            <th>Email </th>
                            <th>Domain</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            info.map((e) => {
                                return <tr>
                                    <td>{e.name}</td>
                                    <td> {e.email}</td>
                                    <td>{e.domain}</td>
                                    <td><button className='btn btn-primary' id={e._id} onClick={() => { approve(e._id) }}>{e.isapproved ? 'Approved' : 'Approve'}</button> </td>

                                </tr>
                            })

                        }
                    </tbody>
                </Table>
            </div>

        </div>
    )
}

export default Admin


