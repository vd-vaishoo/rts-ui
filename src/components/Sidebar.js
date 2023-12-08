import React from 'react';
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
	<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
   <img
          src="https://www.vuedata.com/assets/vuedata%20light.png"
          width="100%"
          height="20px"
          style={{ paddingTop: "15px" }}
        />
        <p style={{ fontSize: "10px" }}>Job Requisition System</p>
        <div style={{ paddingTop: "30px" }}>
          <p><Link to="/">Dashboard</Link></p>
          <p><Link to="/jobopportunities">Job Opportunities</Link></p>
          <p><Link to="/jobrequests">Job Position Request</Link></p>
          <p><Link to="/user">User</Link></p>
          <p><Link to="/masterdata">Master Data</Link></p>
        </div>
  </div>
  )
}

export default Sidebar