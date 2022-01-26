import styles from "./index.module.scss";
import Overview from "../../components/Home/Overview/Overview";
import Experience from "../../components/Home/Experience/Experience";
import Designs from "../../components/Home/Designs/Designs";
import Apps from "../../components/Home/Apps/Apps";

const Home = () => {
  return (
    <div className={styles.home}>
      <Overview />
      <Experience />
      <Designs />
      <Apps />
    </div>
  );
};

export default Home;
