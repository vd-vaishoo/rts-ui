import React from "react";
import { BarChart } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";

const Muicharts = () => {
  return (
    <div className="recharts-div">
      <h2>MUI-Charts</h2>
      <div style={{ width: "500px", height: "250px" }}>
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["Raised", "Pending", "Approved", "Rejected"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [12, 5, 3, 6],
            },
          ]}
          width={500}
          height={300}
        />
      </div>

        <PieChart
		colors={['skyblue', 'lightgreen','pink','yellow']}
          series={[
            {
              data: [
                { id: 0, value: 9, label: "Raised" },
                { id: 1, value: 15, label: "Pending" },
                { id: 2, value: 4, label: "Approved" },
				{ id: 3, value: 5, label: "Rejected" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
    </div>
  );
};

export default Muicharts;
