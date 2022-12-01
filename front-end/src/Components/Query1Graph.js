import React, { useState } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Query1Graph = ({ labels, graphRed, graphYellow }) => {
  console.log(labels, graphRed);

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
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Yellow",
        data: graphYellow,
        backgroundColor: "rgb(255, 201, 0)",
      },
      {
        label: "Red",
        data: graphRed,
        // data: [54, 53, 42, 54, 53, 42, 54, 53, 42],
        backgroundColor: "rgb(190, 0, 0 )",
      },
    ],
  };
  return (
    <div height="100">
      <Chart type="bar" data={data} options={options} />
    </div>
  );
};

export default Query1Graph;
