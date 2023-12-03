import React from "react";
import { Link } from "react-router-dom";

import { BarChart } from "@mui/x-charts";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Dashboard = () => {
  const data = [
    {
      name: "Raised",
      JobOpportunities: 24,
    },
    {
      name: "Pending",
      JobOpportunities: 13,
    },
    {
      name: "Approved",
      JobOpportunities: 98,
    },
    {
      name: "Rejected",
      JobOpportunities: 39,
    },
  ];
  return (
    <div className="dashboard">
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
          <p>Job Position Request</p>
          <p>User</p>
        </div>
      </div>
      <div className="dashboard-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Dashboard</h1>
          <div>
            <FormControl
              className="mui-inputbox"
              sx={{ m: 1, minWidth: 140 }}
              size="small"
            >
              <InputLabel id="demo-select-small-label">Month</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                label="Month"
              >
                {/* <MenuItem value="">
                <em>None</em>
              </MenuItem> */}
                <MenuItem value={10}>Month</MenuItem>
                <MenuItem value={20}>Week</MenuItem>
                <MenuItem value={30}>Custom</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="filters-container">
          {/* <input className="inputbox" /> */}
        </div>
        <div className="chart-container">
          <div className="number-boxes">
            <div className="num-box">
              JobOpportunities <div className="box-count">8</div>
            </div>
            <div className="num-box">
              Job Requests <div className="box-count">8</div>
            </div>
            <div className="num-box">
              Pending Requests <div className="box-count">8</div>
            </div>
            <div className="num-box">
              Approved Requests <div className="box-count">8</div>
            </div>
            <div className="num-box">
              Rejected Requests <div className="box-count">8</div>
            </div>
          </div>
          <div className="charts">
            <div className="chart1">
              <h2 style={{ paddingLeft: "20px" }}>Job Opportunities</h2>
              <BarChart
                xAxis={[
                  {
                    id: "barCategories",
                    data: [
                      
                      "Active",
                      "Saved",
                      "Submitted",
                      "Published",
                    ],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: [ 5, 3, 6, 4],
                    color: ["pink"],
                    label: "Job Opportunities count",
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
            <div className="chart2">
              <h2 style={{ paddingLeft: "20px" }}>Job Requests</h2>
              <BarChart
                xAxis={[
                  {
                    id: "barCategories",
                    data: ["Next Approval","Sent back", "Pending", "Approved", "Rejected"],
                    scaleType: "band",
                  },
                ]}
                series={[
                  {
                    data: [5,12, 5, 3, 6],
                    color: "rgb(139, 126, 252)",
                    label: "Job Requests count",
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
