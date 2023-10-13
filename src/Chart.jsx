import React from "react";
import { Line } from "@ant-design/plots";

const Chart = ({ data }) => {
  console.log(data[0])
  const config = {
    data,
    xField: `gap`,
    yField: "value",
    seriesField: "category",
    xAxis: {
      grid: {
        line: {
          style: {
            lineDash: [4, 4], // Задаем стиль пунктирных линий
            stroke: "#ccc", // Цвет линий
          },
        },
      },
    },
    geometries: [
      {
        type: "line",
        lineStyle: {
          lineWidth: 1000, // Установите желаемую толщину линий (например, 2)
        },
      },
    ],
    yAxis: {
      line: null,
      visible: false,
      grid: null,
    },
    theme: {
      colors10: ["#73CF7A", "#30C7DC", "#45AAF2", "#F5E230", "#AC74FC"],
    },
    tooltip: {
      shared: true,
    },
    interactions: [{ type: "active-region" }],
    smooth: true,
    legend: {
      visible: false,
    },
    lineStyle: {
      lineWidth: 4,
    }
  };

  return (
    <div>
      <Line {...config} />
    </div>
  );
};

export { Chart };
