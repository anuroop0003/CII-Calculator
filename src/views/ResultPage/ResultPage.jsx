import React from "react";

import Chart from "react-apexcharts";

const ResultPage = () => {
  const series = [
    // {
    //   name: "Points 1",
    //   // type: "scatter",
    //   data: [[2025, 5]],
    // },
    {
      name: "Line 1",
      type: "area",
      data: [5, 4, 3, 2, 1],
    },
    {
      name: "Line 2",
      type: "area",
      data: [5, 4, 3, 2, 1],
    },
    {
      name: "Line 3",
      type: "area",
      data: [5, 4, 3, 2, 1],
    },
    {
      name: "Line 4",
      type: "area",
      data: [5, 4, 3, 2, 1],
    },
    {
      name: "Line 5",
      type: "area",
      data: [5, 4, 3, 2, 1],
    },
  ];
  const options = {
    chart: {
      height: 500,
      type: "area",
      stacked: true,
    },
    colors: ["#D05758", "#ED7D31", "#FEF102", "#C5E2B6", "#00B052"],
    stroke: {
      curve: "straight",
    },
    xaxis: {
      // type: "category",
      categories: [2022, 2023, 2024, 2025, 2026],
      // categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    // xaxis: {
    //   type: "numeric",
    //   overwriteCategories: [2022, 2023, 2024, 2025, 2026],
    //   labels: {
    //     formatter: function (value, timestamp, opts) {
    //       return value.toFixed(0);
    //     },
    //   },
    // },
    yaxis: {
      opposite: false,
      // min: 1,
      // max: 30,
      // tickAmount: 30,
      lines: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      tooltip: {
        enabled: true,
      },
    },
    fill: {
      type: "solid",
    },
    // Dots in every line
    markers: {
      size: [1, 1],
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    lineOptions: {
      hideDots: true,
      regionFill: true,
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    // xaxis: {
    //   type: "numeric",
    //   min: 1,
    //   max: 10,
    //   tickAmount: 10,
    // },
  };

  return <Chart height={600} options={options} series={series} type="area" />;
};
export default ResultPage;
