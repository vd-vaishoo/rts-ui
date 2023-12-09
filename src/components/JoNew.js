import React from 'react';
import Sidebar from "./Sidebar";
import { Link,Outlet } from "react-router-dom";


const JoNew = () => {
  return (
	<div className="dashboard">
		<div className="sidebar">
        <Sidebar/>
      </div>
	  <div className="dashboard-content">
	  <h2>Job Opportunities</h2>
	  <div className="table-container" style={{height:"500px"}}>
	    <div style={{display:"flex",justifyContent:"space-between"}}>
            <Link to="/jobopportunities">
            <button className="blue-btn">Back</button>
            </Link>
			<div>
			<button className="blue-btn">Clear</button>&nbsp;&nbsp;
			<button className="blue-btn">Save</button>&nbsp;&nbsp;
			<button className="blue-btn">Submit</button>
			</div>    
        </div>
		{/* form */}
		<div style={{paddingTop:"30px"}}>
			<table style={{width:"100%"}}>
				<tr >
					<td style={{width:"70%"}}>
					<lablel>Job Description</lablel><br/>
					<input className='input-box' style={{width:"95%"}}/>
					</td>
					<td>
					<lablel>Count</lablel><br/>
					<input className='input-box' style={{width:"97%"}}/>
					</td>
					
				</tr>
				<br/>
				<tr >
					<td colspan="9">
					<lablel>Project Name</lablel><br/>
					<select placeholder='Project Name' className='input-box' name="cars" id="cars" style={{width:"100%",height:'35px'}}>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
					</td>
				</tr>
				<br/>
				<tr >
					<td colspan="9">
					<lablel>Client Name</lablel><br/>
					<select placeholder='Project Name' className='input-box' name="cars" id="cars" style={{width:"100%",height:'35px'}}>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
					</td>
				</tr>
				<br/>
				<tr >
					<td colspan="9">
					<lablel>Project Start Date</lablel><br/>
					<select placeholder='Project Name' className='input-box' name="cars" id="cars" style={{width:"100%",height:'35px'}}>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
					</td>
				</tr>
				<br/>
				<tr >
					<td style={{width:"70%"}}>
					<lablel>Budget</lablel><br/>
					<input className='input-box' style={{width:"95%"}}/>
					</td>
					<td>
					<lablel>Priority</lablel><br/>
					<input className='input-box' style={{width:"97%"}}/>
					</td>
					
				</tr>
				<br/>
				<tr >
					<td style={{width:"50%"}}>
					<lablel>Assign To</lablel><br/>
					<input className='input-box' style={{width:"95%"}}/>
					</td>
					<td style={{width:"50%"}}>
					<lablel>Name</lablel><br/>
					<input className='input-box' style={{width:"95%"}}/>
					</td>
					
				</tr>
			</table>
		</div>
	  </div>
	  
	  </div>
	</div>
  )
}

export default JoNew