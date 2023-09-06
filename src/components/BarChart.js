import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import * as  faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" 
    },
    title: {
      display: true,
      text: ""
    }
  }
};

const labels = ["2022-2023"];

export const data = {
  labels,
  datasets: [
    {
      label: "Total Strength",
      data: labels.map(() => 222),
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Total Offers",
      data: labels.map(() => 220),
      backgroundColor: "rgba(54, 162, 235, 0.2)"
    },
    {
      label: "Companies Visited",
      data: labels.map(() => 120),
      backgroundColor: "rgba(255, 206, 86, 0.2)"
    },
    {
      label: "Placement %",
      data: labels.map(() => 85),
      backgroundColor: "rgba(75, 192, 192, 0.2)"
    }
  ]
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
