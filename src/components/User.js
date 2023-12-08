import React from 'react';
import Sidebar from "./Sidebar";


const User = () => {
  return (
	<div className="dashboard">
		<div className="sidebar">
        <Sidebar/>
      </div>
	  <div className="dashboard-content"></div>

	</div>
  )
}

export default User