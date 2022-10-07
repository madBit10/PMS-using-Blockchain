import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


function LiveChart({data}) {
    const data1 = [
        { name: "A", value: data[0] },
        { name: "B", value: data[1] },
        { name: "C", value: data[2] },
        { name: "D", value: data[3] },
        { name: "E", value: data[4] },
      ];
      
  return (
    <>
     <LineChart
      width={500}
      height={300}
      data={data1}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend /> 
      <Line
        type="monotone"
        dataKey="value"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    // </LineChart>
    </>
  );
}
export default LiveChart;