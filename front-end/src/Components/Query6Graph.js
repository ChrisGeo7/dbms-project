import React, { useState } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Query6Graph = ({
  labels,
  graph1Data,
  graph2Data,
  graph3Data,
  graph4Data,
  graph5Data,
}) => {
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
        label: "Player1",
        data: graph1Data,
        backgroundColor: "rgb(231, 76, 60)",
        borderColor: "rgb(231, 76, 60)",
      },
      {
        label: "Player2",
        data: graph2Data,
        backgroundColor: "rgb(241, 196, 15 )",
        borderColor: "rgb(241, 196, 15)",
      },
      {
        label: "Player3",
        data: graph3Data,
        backgroundColor: "rgb(41, 128, 185  )",
        borderColor: "rgb(41, 128, 185  )",
      },
      {
        label: "Player4",
        data: graph4Data,
        backgroundColor: "rgb(26, 188, 156 )",
        borderColor: "rgb(26, 188, 156 )",
      },
      {
        label: "Player5",
        data: graph5Data,
        backgroundColor: "rgb(255, 183, 192)",
        borderColor: "rgb(255, 183, 192)",
      },
    ],
  };
  return (
    <div height="100">
      <Chart type="line" data={data} options={options} />
    </div>
  );
};

export default Query6Graph;
