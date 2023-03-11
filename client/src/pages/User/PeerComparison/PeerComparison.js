import React, { useEffect, useState } from 'react'
import './PeerComparison.css'

let avgPE = 0;

function PeerComparison() {
    const [sectors, setSectors] = useState([])
    const [stocksdata, setStocksData] = useState([])
    

    let handleSectorClick = async (sector_id) => {


        const response = await fetch(`http://localhost:1337/api/admin/stocks/fetch?id=${sector_id}`);
        const data = await response.json();
        setStocksData(data.data);


    }
    async function fetchSectors() {
        let response = await fetch('http://localhost:1337/api/admin/stocks/fetchsectors');
        let data = await response.json();

        setSectors(data.sectorsdata);

    }


    useEffect(() => {


        fetchSectors();


    }, [handleSectorClick], );


    // Calculate the average of P/E values
    if (stocksdata.length > 0) {
        avgPE = stocksdata.reduce((acc, stock) => acc + stock.P_E_Ratio, 0) / stocksdata.length;
    }


    return (
        /* 343a40 F5FBF9   e9ecef*/

        <div className='my-5 py-5'>
            <div style={{ backgroundColor: "#F5FBF9" }}>
                <section className="container">
                    <div className="row" style={{ padding: "20px" }}>
                        <div className="col-lg-3 col-md-12" style={{ height: "auto", backgroundColor: "#343a40" }}>
                            <div className="links grievance-links">
                                {
                                    sectors.map((sec) => {
                                        return (<p onClick={() => handleSectorClick(sec._id)}>{sec.Sector_name}</p>)
                                    })
                                }


                            </div>
                        </div>
                        <div className="col-lg-9">

                                <div className="table-responsive" style={{width:"100%", height:"500px"}}>
                                <table className=" table  table-striped table-bordered table-responsive">
                                <thead className="table-dark">
                                    <tr>
                                        {/* <th>S.No</th> */}
                                        <th>Name</th>
                                        <th>CMP_Rs</th>
                                        <th>P_E_Ratio</th>
                                        <th>Mar_Cap_Rs_Cr</th>
                                        <th>Div_Yld_Percentage</th>
                                        <th>NP_Qtr_Rs_Cr</th>
                                        <th>Qtr_Profit_Var_Percentage</th>
                                        <th>Sales_Qtr_Rs_Cr</th>
                                        <th>Qtr_Sales_Var_Percentage</th>
                                        <th>ROCE_Percentage</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {stocksdata.map((sd) => {

                                        return (
                                            <tr>
                                                {/* <td>{}</td> */}
                                                
                                            </tr>
                                        )
                                    })}


                                    


                                </tbody>
                            </table>
                            <p>Average P/E Ratio: {avgPE.toFixed(2)}</p>
                                </div>
                           
                           
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default PeerComparison
