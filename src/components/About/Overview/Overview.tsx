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
      { text: "React", max: 100 },
      { text: "PHP", max: 100 },
      { text: "Java / Kotlin", max: 100 },
      { text: "MySQL", max: 100 },
      { text: "Figma", max: 100 },
      { text: "Photoshop", max: 100 },
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
        value: [100, 85, 90, 80, 95, 100],
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
