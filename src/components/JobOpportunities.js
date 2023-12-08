import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscCopy } from "react-icons/vsc";
import { AiOutlineExport } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import Sidebar from "./Sidebar";

const JobOpportunities = () => {
  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "company",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "city",
      label: "City",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "state",
      label: "State",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const data = [
    { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
    { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
    { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
    {
      name: "James Houston",
      company: "Test Corp",
      city: "Dallas",
      state: "TX",
    },
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <div className="dashboard">
      <div className="sidebar">
       <Sidebar/>
      </div>
      <div className="job-opp-content">
        <h2>Job Opportunities</h2>
        {/* filter section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              {/* date filter */}
              <FormControl
                className="mui-inputbox"
                sx={{ m: 1, minWidth: 140 }}
                size="small"
                style={{ height: "30px" }}
              >
                <InputLabel
                  id="demo-select-small-label"
                  style={{ fontSize: "15px", lineHeight: "15px" }}
                >
                  Month
                </InputLabel>
                <Select
                  style={{ height: "30px" }}
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
              {/* active filter */}
              <FormControl
                className="mui-inputbox"
                sx={{ m: 1, minWidth: 140 }}
                size="small"
              >
                <InputLabel
                  id="demo-select-small-label"
                  style={{ fontSize: "15px", lineHeight: "15px" }}
                >
                  Active
                </InputLabel>
                <Select
                  style={{ height: "30px" }}
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
              {/* My request */}
              <FormControl
                className="mui-inputbox"
                sx={{ m: 1, minWidth: 140 }}
                size="small"
              >
                <InputLabel
                  id="demo-select-small-label"
                  style={{ fontSize: "15px", lineHeight: "15px" }}
                >
                  My Request
                </InputLabel>
                <Select
                  style={{ height: "30px" }}
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
          <div>
            <button className="blue-btn">Export</button>
          </div>
        </div>

        {/* JO table section */}
        <div className="table-container">
          {/* <MUIDataTable
            //   title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
          /> */}
          <div>
            <button className="blue-btn">New</button>
          </div>
          <table style={{ paddingTop: "10px" }}>
            <tr
              style={{
                backgroundColor: "#2196F3",
                color: "white",
                textAlign: "center",
                height: "45px",
                borderRadius: "5px",
              }}
            >
              <td>JOC Id</td>
              <td>Client Name</td>
              <td>Count</td>
              <td>Created By</td>
              <td>Assigned To</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
            <br />

            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <td>JOC1</td>
              <td>ABC Corporation</td>
              <td>5</td>
              <td>Sadhasivam</td>
              <td>Arul Subramanian</td>
              <td>Active</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                <RiDeleteBin6Line />
                &nbsp;&nbsp;
                <VscCopy />
                &nbsp;&nbsp;
                <AiOutlineExport />
              </td>
            </tr>
            <br />
            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <td>JOC2</td>
              <td>Precision Health Consultants</td>
              <td>9</td>
              <td>Arul Subramanian</td>
              <td>Arul Subramanian</td>
              <td>Submitted</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                <RiDeleteBin6Line />
                &nbsp;&nbsp;
                <VscCopy />
                &nbsp;&nbsp;
                <AiOutlineExport />
              </td>
            </tr>
            <br />
            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <td>JOC3</td>
              <td>Pinnacle Innovations Labs</td>
              <td>4</td>
              <td>Muru Ganesan</td>
              <td>Arul Subramanian</td>
              <td>Saved</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                <RiDeleteBin6Line />
                &nbsp;&nbsp;
                <VscCopy />
                &nbsp;&nbsp;
                <AiOutlineExport />
              </td>
            </tr>
            <br />
            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <td>JOC4</td>
              <td>Nexus Realty Partners</td>
              <td>7</td>
              <td>Sneha Balachander</td>
              <td>Arul Subramanian</td>
              <td>Active</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                <RiDeleteBin6Line />
                &nbsp;&nbsp;
                <VscCopy />
                &nbsp;&nbsp;
                <AiOutlineExport />
              </td>
            </tr>
            <br />
            <tr
              style={{
                backgroundColor: "white",
                color: "black",
                textAlign: "center",
                height: "40px",
                borderRadius: "5px",
              }}
            >
              <td>JOC5</td>
              <td>Precision Health Consultants</td>
              <td>9</td>
              <td>Arul Subramanian</td>
              <td>Arul Subramanian</td>
              <td>Submitted</td>
              <td>
                <IoEyeOutline />
                &nbsp;
                <GoPencil />
                &nbsp;
                <RiDeleteBin6Line />
                &nbsp;&nbsp;
                <VscCopy />
                &nbsp;&nbsp;
                <AiOutlineExport />
              </td>
            </tr>
            <br />
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;

<div>
  {/* date filter */}
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
  {/* active filter */}
  <FormControl
    className="mui-inputbox"
    sx={{ m: 1, minWidth: 140 }}
    size="small"
  >
    <InputLabel id="demo-select-small-label">Active</InputLabel>
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
  {/* My request */}
  <FormControl
    className="mui-inputbox"
    sx={{ m: 1, minWidth: 140 }}
    size="small"
  >
    <InputLabel id="demo-select-small-label">My Request</InputLabel>
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
</div>;
