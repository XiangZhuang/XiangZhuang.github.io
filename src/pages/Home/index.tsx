import styles from "./index.module.scss";
import Overview from "../../components/Home/Overview/Overview";
import Experience from "../../components/Home/Experience/Experience";
import Designs from "../../components/Home/Designs/Designs";

const Home = () => {
  return (
    <div className={styles.home}>
      <Overview />
      <Experience />
      <Designs />
    </div>
  );
};

export default Home;
