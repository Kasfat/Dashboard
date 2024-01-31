import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChartCom = () => {
  const data = [
    { label: "January", value: 100 },
    { label: "February", value: 59 },
    { label: "March", value: 80 },
    { label: "April", value: 81 },
    { label: "May", value: 56 },
    { label: "May", value: 56 },
  ];
  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart
        width={650}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartCom;
