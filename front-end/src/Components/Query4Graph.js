import React, { useState } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Query4Graph = ({
  labels,
  graphgbData,
  graphesData,
  graphlData,
  graphitData,
  graphfrData,
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
        label: "Premier League",
        data: graphgbData,
        backgroundColor: "rgb(231, 76, 60)",
        borderColor: "rgb(231, 76, 60)",
      },
      {
        label: "La Liga",
        data: graphesData,
        backgroundColor: "rgb(241, 196, 15 )",
        borderColor: "rgb(241, 196, 15)",
      },
      {
        label: "Bundesliga",
        data: graphlData,
        backgroundColor: "rgb(41, 128, 185  )",
        borderColor: "rgb(41, 128, 185  )",
      },
      {
        label: "Serie A",
        data: graphitData,
        backgroundColor: "rgb(26, 188, 156 )",
        borderColor: "rgb(26, 188, 156 )",
      },
      {
        label: "Ligue 1",
        data: graphfrData,
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

export default Query4Graph;
