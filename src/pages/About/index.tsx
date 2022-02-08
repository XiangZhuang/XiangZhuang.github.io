import Overview from "../../components/About/Overview/Overview";
import Experiences from "../../components/About/Educations/Educations";
import Careers from "../../components/About/Careers/Careers";
import styles from "./index.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <Overview />
      <Experiences />
      <Careers />
    </div>
  );
};

export default About;
