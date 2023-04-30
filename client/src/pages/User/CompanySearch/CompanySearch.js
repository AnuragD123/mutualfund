import React, { useState } from "react";
import data from "./CompanyData.json";
import "./CompanySearch.css";

function CompanySearch() {
  const [companyName, setCompanyName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const { CMP_Rs, P_E_Ratio, Mar_Cap_Rs_Cr, Div_Yld_Percentage } = event.target.elements;

    if (data && data.companies && data.companies.length > 0) {
      const company = data.companies.find(
        (c) =>
          c.CMP_Rs === Number(CMP_Rs.value) &&
          c.P_E_Ratio === Number(P_E_Ratio.value) &&
          c.Mar_Cap_Rs_Cr === Number(Mar_Cap_Rs_Cr.value) &&
          c.Div_Yld_Percentage === Number(Div_Yld_Percentage.value)
      );

      if (company) {
        setCompanyName(company.name);
        console.log(company.name);
      } else {
        setCompanyName("Company not found");
      }
    } else {
      console.error("Error: data or data.companies is undefined or empty.");
    }
  };
  //console.log(data);
  

  return (
    <div className="company-search">
      <h1>Company Finder</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="CMP_Rs">CMP_Rs:</label>
          <input type="number" name="CMP_Rs" id="CMP_Rs" />
        </div>
        {/* <div className="form-group">
          <label htmlFor="P_E_Ratio">P_E_Ratio:</label>
          <input type="number" name="P_E_Ratio" id="P_E_Ratio" />
        </div>
        <div className="form-group">
          <label htmlFor="Mar_Cap_Rs_Cr">Mar_Cap_Rs_Cr:</label>
          <input type="number" name="Mar_Cap_Rs_Cr" id="Mar_Cap_Rs_Cr" />
        </div>
        <div className="form-group">
          <label htmlFor="Div_Yld_Percentage">Div_Yld_Percentage:</label>
          <input type="number" name="Div_Yld_Percentage" id="Div_Yld_Percentage" />
        </div> */}
        <button type="submit">Find Company</button>
      </form>
      <p>{companyName}</p>
      
    </div>
    
  );
}

export default CompanySearch;
