import React from 'react';
import { Link } from "react-router-dom";
import {
  AccordionDetails,
  Typography,
  Accordion,
  AccordionSummary,
} from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { IoEyeOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscCopy } from "react-icons/vsc";
import { AiOutlineExport } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";


const MasterData = () => {
	const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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
          <p>
            <Link to="/">Dashboard</Link>
          </p>
          <p>
            <Link to="/jobopportunities">Job Opportunities</Link>
          </p>
          <p>
            <Link to="/jobrequests">Job Position Request</Link>
          </p>
          <p>
            <Link to="/user">User</Link>
          </p>
		  <p><Link to="/masterdata">Master Data</Link></p>
        </div>
        </div>

		<div className="dashboard-content">
        <div style={{ height: "20vh", width: "100%" }}>
          <h2>Job Position Requests</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              
            </div>
            <div>
              <button className="blue-btn">Export</button>
            </div>
          </div>
        </div>
		<div className="table-container">
		<div>
            <button className="blue-btn">New</button>
          </div>
        <div style={{ maxHeight: "430px", width: "100%" }}>
          <table style={{ padding: "10px 0px", width: "100%"  }}>
            <tr
              style={{
                backgroundColor: "#2196F3",
                color: "white",
                textAlign: "center",
                height: "45px",
                borderRadius: "10px",
                width: "100vw",
              }}
            >
              <td>Master data Details</td>
              <td>Actions</td>
            </tr>
          </table>

		   {/* Accordian-1 */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              style={{ height: "25px" }}
            >
              <Typography
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  textAlign: "center",
                  height: "30px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "left",
                  paddingLeft: "10px",
				  margin:"0px"
                }}
              >
                <RiArrowDropDownLine
                  style={{ width: "30px", fontSize: "20px" }}
                />
                Client Name
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table style={{ width: "100%", }}>
                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR1</td>
                    <td>Low</td>
                    <td>Junior Developer</td>
                    <td>Arul Subramanian</td>
                    <td>Active</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR2</td>
                    <td>High</td>
                    <td>Data Analyst</td>
                    <td>Arul Subramanian</td>
                    <td>Submitted</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR3</td>
                    <td>High</td>
                    <td>QA Tester</td>
                    <td>Arul Subramanian</td>
                    <td>Saved</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>

		  {/* Accordian-2 */}
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  textAlign: "center",
                  height: "30px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "left",
                  paddingLeft: "10px",
                }}
              >
                <RiArrowDropDownLine
                  style={{ width: "30px", fontSize: "20px" }}
                />
                Project Name
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table style={{ paddingTop: "10px", width: "100%" }}>
                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR1</td>
                    <td>Low</td>
                    <td>Junior Developer</td>
                    <td>Arul Subramanian</td>
                    <td>Active</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR2</td>
                    <td>High</td>
                    <td>Data Analyst</td>
                    <td>Arul Subramanian</td>
                    <td>Submitted</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR3</td>
                    <td>High</td>
                    <td>QA Tester</td>
                    <td>Arul Subramanian</td>
                    <td>Saved</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>

		   {/* Accordian-3 */}
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  textAlign: "center",
                  height: "30px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "left",
                  paddingLeft: "10px",
                }}
              >
                <RiArrowDropDownLine
                  style={{ width: "30px", fontSize: "20px" }}
                />
                Primary Skills
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table style={{ paddingTop: "10px", width: "100%" }}>
                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR1</td>
                    <td>Low</td>
                    <td>Junior Developer</td>
                    <td>Arul Subramanian</td>
                    <td>Active</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR2</td>
                    <td>High</td>
                    <td>Data Analyst</td>
                    <td>Arul Subramanian</td>
                    <td>Submitted</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR3</td>
                    <td>High</td>
                    <td>QA Tester</td>
                    <td>Arul Subramanian</td>
                    <td>Saved</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>

		  {/* Accordian-4 */}
		  <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  textAlign: "center",
                  height: "30px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "left",
                  paddingLeft: "10px",
                }}
              >
                <RiArrowDropDownLine
                  style={{ width: "30px", fontSize: "20px" }}
                />
                Tech Stack
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table style={{ paddingTop: "10px", width: "100%" }}>
                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR1</td>
                    <td>Low</td>
                    <td>Junior Developer</td>
                    <td>Arul Subramanian</td>
                    <td>Active</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR2</td>
                    <td>High</td>
                    <td>Data Analyst</td>
                    <td>Arul Subramanian</td>
                    <td>Submitted</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR3</td>
                    <td>High</td>
                    <td>QA Tester</td>
                    <td>Arul Subramanian</td>
                    <td>Saved</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>

		  {/* Accordian-5 */}
		  <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  textAlign: "center",
                  height: "30px",
                  borderRadius: "5px",
                  width: "100%",
                  textAlign: "left",
                  paddingLeft: "10px",
                }}
              >
                <RiArrowDropDownLine
                  style={{ width: "30px", fontSize: "20px" }}
                />
                Work Location
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <table style={{ paddingTop: "10px", width: "100%" }}>
                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR1</td>
                    <td>Low</td>
                    <td>Junior Developer</td>
                    <td>Arul Subramanian</td>
                    <td>Active</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR2</td>
                    <td>High</td>
                    <td>Data Analyst</td>
                    <td>Arul Subramanian</td>
                    <td>Submitted</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  <tr
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      textAlign: "center",
                      height: "40px",
                      borderRadius: "5px",
                    }}
                  >
                    <td>JPR3</td>
                    <td>High</td>
                    <td>QA Tester</td>
                    <td>Arul Subramanian</td>
                    <td>Saved</td>
                    <td>
                      <IoEyeOutline />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <GoPencil />
                    </td>
                  </tr>

                  
                </table>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
		</div>
      </div>
	</div>
  )
}

export default MasterData