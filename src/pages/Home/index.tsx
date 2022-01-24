import styles from "./index.module.scss";
import Overview from "../../components/Home/Overview/Overview";
import Experience from "../../components/Home/Experience/Experience";

const Home = () => {
  return (
    <div className={styles.home}>
      <Overview />
      <Experience />
    </div>
  );
};

export default Home;
