import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

import styles from "./Chart.module.css";
import { selectDaily } from "../covidSlice";

const Chart: React.FC = () => {
  const daily = useSelector(selectDaily);
  // apiからDateだけ取り出して配列を作成
  const dates = daily.map(({ Date }) => Date);

  const LineChart = daily[0] && (
    <Line
      data={{
        // datesの配列の要素をdateというテンポラリーの変数に格納している
        // JSの標準関数のDateオブジェクトを作成して読みやすいフォーマットに変換している
        labels: dates.map((date) => new Date(date).toDateString()),

        datasets: [
          {
            data: daily.map((data) => data.Confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: false,
          },
          {
            data: daily.map((data) => data.Recovered),
            label: "Recovered",
            borderColor: "green",
            fill: false,
          },
          {
            data: daily.map((data) => data.Deaths),
            label: "Deaths",
            borderColor: "#ff3370",
            fill: false,
          },
        ],
      }}
    />
  )
  return <div className={styles.container}>{LineChart}</div>;
};

export default Chart;
