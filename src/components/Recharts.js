import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
} from "recharts";

const Recharts = () => {
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
// Piechart
  const data01 = [
    {
      name: "Raised",
      value: 12,
    },
    {
      name: "Pending",
      value: 8,
    },
    {
      name: "Approved",
      value: 3,
    },
    {
      name: "Rejected",
      value: 20,
    },
  ];




  
  return (
    <div className="recharts-div">
      <h2>RE-CHARTS</h2>
      <BarChart width={500} height={250} data={data}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="JobOpportunities" fill="#8884d8" />
      </BarChart>

	  
      <PieChart width={300} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={80}
          fill="crimson"
          label
        />
      </PieChart>
    </div>
  );
};

export default Recharts;
