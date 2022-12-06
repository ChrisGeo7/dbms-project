import React from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const LineGraph = ({ labels, graphData }) => {
  console.log(labels, graphData);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "A",
        yAxisID: "A",
        data: graphData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
      // {
      //   label: "B",
      //   yAxisID: "B",
      //   data: [
      //     20, 10, 40, 20, 30, 50, 40, 30, 80, 20, 20, 10, 40, 20, 30, 50, 40,
      //     30, 80, 20, 20, 10, 40, 20, 30, 50, 40, 30, 80, 20, 20, 10, 40, 20,
      //     30, 50, 40, 30, 80, 20, 50, 40,
      //   ],
      //   backgroundColor: [
      //     "rgba(255, 99, 132, 0.2)",
      //     "rgba(255, 159, 64, 0.2)",
      //     "rgba(255, 205, 86, 0.2)",
      //     "rgba(75, 192, 192, 0.2)",
      //     "rgba(54, 162, 235, 0.2)",
      //     "rgba(153, 102, 255, 0.2)",
      //     "rgba(201, 203, 207, 0.2)",
      //   ],
      //   borderColor: [
      //     "rgb(255, 99, 132)",
      //     "rgb(255, 159, 64)",
      //     "rgb(255, 205, 86)",
      //     "rgb(75, 192, 192)",
      //     "rgb(54, 162, 235)",
      //     "rgb(153, 102, 255)",
      //     "rgb(201, 203, 207)",
      //   ],
      //   borderWidth: 1,
      // },
    ],

    options: {
      scales: {
        yAxes: [
          {
            id: "A",
            type: "linear",
            position: "left",
            scalePositionLeft: true,
          },
          {
            id: "B",
            type: "linear",
            position: "right",
            scalePositionLeft: false,
            ticks: {
              max: 1,
              min: 0,
            },
          },
        ],
      },
    },
  };
  return (
    <div height="100">
      <Chart type="line" data={data} />
    </div>
  );
};

export default LineGraph;
