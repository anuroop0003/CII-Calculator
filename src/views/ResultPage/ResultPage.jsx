import React from "react";

import Chart from "react-apexcharts";

const ResultPage = () => {
  const series = [
    {
      name: "Points 1",
      type: "scatter",
      data: [4, 5, 2, 3, 1],
    },
    {
      name: "Line 1",
      type: "area",
      data: [
        5.853, 5.794, 5.736, 5.677, 5.56, 5.443, 5.326, 5.209, 5.048, 4.887,
        4.726, 4.565,
      ],
    },
    {
      name: "Line 2",
      type: "area",
      data: [
        0.785, 0.777, 0.769, 0.762, 0.746, 0.73, 0.714, 0.699, 0.677, 0.656,
        0.634, 0.612,
      ],
    },
    {
      name: "Line 3",
      type: "area",
      data: [
        1.071, 1.06, 1.049, 1.038, 1.017, 0.996, 0.974, 0.953, 0.923, 0.894,
        0.865, 0.835,
      ],
    },
    {
      name: "Line 4",
      type: "area",
      data: [
        1.427, 1.413, 1.399, 1.385, 1.356, 1.328, 1.299, 1.27, 1.231, 1.192,
        1.153, 1.113,
      ],
    },
    {
      name: "Line 5",
      type: "area",
      data: [
        0.864, 0.956, 1.047, 1.138, 1.321, 1.504, 1.686, 1.869, 2.12, 2.372,
        2.623, 2.874,
      ],
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
      categories: [
        2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
      ],
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
      min: 1,
      max: 10,
      tickAmount: 10,
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
      size: [5, 0, 0, 0, 0, 0],
      colors: "#000000",
      strokeColor: "#000000",
      shape: "circle",
      hover: {
        size: 6,
      },
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
