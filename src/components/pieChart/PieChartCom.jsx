import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#1C1C1C", "#BAEDBD", "#B1E3FF", "#95A4FC"];

const PieChartCom = () => {
  return (
    <div className=" flex">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={120}
          cy={130}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="grid grid-cols-2 mt-14 gap-12">
        <div className=" list-dot flex flex-col space-y-4">
          <p>United Status</p>
          <p>Canada</p>
          <p>Maxico</p>
          <p>Other</p>
        </div>
        <div className=" flex flex-col space-y-4">
          <p>38.6%</p>
          <p>22.5%</p>
          <p>30.8%</p>
          <p>8.1%</p>
        </div>
      </div>
    </div>
  );
};

export default PieChartCom;
