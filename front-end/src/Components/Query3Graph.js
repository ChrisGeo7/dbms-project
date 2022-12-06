import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Query2Graph = ({
  labels,
  graph1Data,
  graph2Data,
  graph1Count,
  graph2Count,
  comp1,
  comp2,
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
    maintainAspectRatio: true,
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
        type: "line",
        label: comp1,
        data: graph1Data,
        backgroundColor: "rgb(231, 76, 60)",
        borderColor: "rgb(231, 76, 60)",
      },
      {
        type: "line",
        label: comp2,
        data: graph2Data,
        backgroundColor: "rgb(41, 128, 185  )",
        borderColor: "rgb(41, 128, 185  )",
      },
      {
        type: "bar",
        label: "Games in " + comp1,
        data: graph1Count,
        backgroundColor: "rgb(231, 76, 60)",
        borderColor: "rgb(231, 76, 60)",
      },
      {
        type: "bar",
        label: "Games in " + comp2,
        data: graph2Count,
        backgroundColor: "rgb(41, 128, 185  )",
        borderColor: "rgb(41, 128, 185  )",
      },
    ],
  };
  return (
    <div height="100">
      <Chart data={data} options={options} />
    </div>
  );
};

export default Query2Graph;
