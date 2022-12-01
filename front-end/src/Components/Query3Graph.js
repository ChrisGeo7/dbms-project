import React, { useState } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Query2Graph = ({ labels, graph1Data, graph2Data }) => {
  //   console.log(labels, graphGA, graphEMV);

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
        label: "Competition 1",
        data: graph1Data,
        backgroundColor: "rgb(255, 201, 0)",
      },
      {
        label: "Competition 2",
        data: graph2Data,
        // data: [54, 53, 42, 54, 53, 42, 54, 53, 42],
        backgroundColor: "rgb(190, 0, 0 )",
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
