import React, { useState } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Query2Graph = ({ labels, graphGA, graphEMV }) => {
  console.log(labels, graphGA, graphEMV);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Goals + Assists",
        data: graphGA,
        backgroundColor: "rgb(231, 76, 60)",
        borderColor: "rgb(231, 76, 60)",
      },
      {
        label: "Market Valuation in Millions",
        data: graphEMV,
        // data: [54, 53, 42, 54, 53, 42, 54, 53, 42],
        backgroundColor: "rgb(41, 128, 185  )",
        borderColor: "rgb(41, 128, 185  )",
      },
    ],
  };
  return (
    <div height="100">
      <Chart type="line" data={data} options={options} />
    </div>
  );
};

export default Query2Graph;
