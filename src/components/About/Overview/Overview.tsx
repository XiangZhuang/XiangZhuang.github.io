import ReactECharts from "echarts-for-react";
import styles from "./Overview.module.scss";
import Name from "../../UI/Name/Name";
import self from "../../../resources/images/about/self.png";

const optionGeneral = {
  grid: {
    left: "0px",
  },
  tooltip: {
    trigger: "axis",
  },
  radar: {
    name: {
      show: true,
    },
    indicator: [
      { text: "Painting", max: 100 },
      { text: "Photography", max: 100 },
      { text: "Poster Design", max: 100 },
      { text: "UI Design", max: 100 },
      { text: "Frontend", max: 100 },
      { text: "Backend", max: 100 },
    ],
    shape: "circle",
    center: ["220px", "200px"],
    radius: "55%",
  },
  series: {
    type: "radar",
    tooltip: {
      trigger: "item",
    },
    itemStyle: {
      color: "#404040",
    },
    areaStyle: {},
    data: [
      {
        value: [80, 80, 90, 80, 100, 90],
        name: "General Info",
      },
    ],
  },
};

const Overview = () => {
  return (
    <div
      className={styles.overview}
      style={{
        backgroundImage: `url(${self})`,
      }}
    >
      <div className={styles.info}>
        <Name />
        <div className={styles.chartContainer}>
          <ReactECharts className={styles.chart} option={optionGeneral} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
