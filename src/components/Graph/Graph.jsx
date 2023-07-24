import Chart from "react-apexcharts";

export default function Graph({
  inferior_boundary,
  upper_boundary,
  lower_boundary,
  superior_boundary,
  plotYears,
  RequiredCII,
  result,
  maximum_boundary,
}) {
  const series = [
    {
      name: "Superior Boundary",
      type: "area",
      data: superior_boundary,
    },
    {
      name: "Lower Boundary",
      type: "area",
      data: lower_boundary,
    },
    {
      name: "Upper Boundary",
      type: "area",
      data: upper_boundary,
    },
    {
      name: "Inferior Boundary",
      type: "area",
      data: inferior_boundary,
    },
    {
      name: "Maximum Boundary",
      type: "area",
      data: maximum_boundary,
    },
    {
      name: "Points 1",
      type: "scatter",
      data: result,
    },
    {
      name: "Required CII",
      type: "line",
      data: RequiredCII,
    },
  ];
  const options = {
    chart: {
      height: 500,
      // innerWidth: 400,
      type: "area",
      stacked: true,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [
      "#00AF50",
      "#C5E0B5",
      "#FFFE00",
      "#F99C34",
      "#FE6E6E",
      "#000000",
      "#0000FF",
    ],
    stroke: {
      curve: "straight",
    },
    xaxis: {
      // type: "category",
      categories: plotYears,
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
      min: 0,
      max: 7,
      labels: {
        formatter: function (value, timestamp, opts) {
          return value.toFixed(1);
        },
      },

      // tickAmount: 10,
      lines: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    fill: {
      type: "solid",
      colors: [
        "#00AF50",
        "#C5E0B5",
        "#FFFE00",
        "#F99C34",
        "#FE6E6E",
        "#000000",
        "#0000FF",
      ],
    },
    // Dots in every line
    markers: {
      size: [0, 0, 0, 0, 0, 1, 5],
      colors: "#000000",
      strokeColor: "#000000",
      shape: "circle",
      hover: {
        size: 6,
      },
    },
    tooltip: {
      shared: false,
      intersect: false,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        var data = w.globals.initialSeries[seriesIndex].name;
        return (
          '<div class="arrow_box">' +
          "<p>" +
          "Hello World" +
          "</p>" +
          "<p>" +
          series[seriesIndex][dataPointIndex] +
          "</p>" +
          "</div>"
        );
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
    },
  };

  return (
    <Chart
      width={1000}
      height={600}
      options={options}
      series={series}
      type="area"
    />
  );
}
