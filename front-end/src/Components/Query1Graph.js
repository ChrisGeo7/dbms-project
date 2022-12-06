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
        backgroundColor: "#FFCA48",
      },
      {
        label: "Red",
        data: graphRed,
        backgroundColor: "rgb(231, 76, 60)",
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
