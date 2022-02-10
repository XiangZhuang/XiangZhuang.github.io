import Overview from "../../components/About/Overview/Overview";
import Experiences from "../../components/About/Educations/Educations";
import Careers from "../../components/About/Careers/Careers";
import styles from "./index.module.scss";
import Others from "../../components/About/Others/Others";

const About = () => {
  return (
    <div className={styles.about}>
      <Overview />
      <Experiences />
      <Careers />
      <Others />
    </div>
  );
};

export default About;
