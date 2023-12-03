import React from 'react';
import { Link } from "react-router-dom";


const JobRequests = () => {
  return (
	<div>
		<div className="sidebar">
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
          <p><Link to="/jobposition">Job Position Request</Link></p>
          <p><Link to="/user">User</Link></p>
        </div>
      </div>
	  <div className="dashboard-content"></div>
	</div>
  )
}

export default JobRequests