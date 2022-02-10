import styles from "./Others.module.scss";
import Card from "../Card/Card";

const OTHERS = [
  {
    title: "Chinese Folk Art Society",
    role: "Information & Technology Secretary",
    desc: "I developed a knowledge competition system (PHP + MySQL) capable of handling real-time Q&A for more than 100 university students. As duty, I maintained the society website (HTML + Javascript) and made powerpoints for society events.",
    location: "Hong Kong SAR",
    span: ["Mar 2018", "Mar 2019"],
  },
  {
    title: "Mainland Students and Scholars Society, UG Section",
    role: "Student Mentor",
    desc: "I helped freshmen in HKUST get used to university life, introducing school facilities and sharing life in Hong Kong.",
    location: "Hong Kong SAR",
    span: ["Sep 2018", "Sep 2019"],
  },
];

const Careers = () => {
  return (
    <div className={styles.others}>
      <div className={styles.title}>
        <p>Other Experiences</p>
      </div>
      <div className={styles.cards}>
        {OTHERS.map((OTHER) => {
          return (
            <Card
              title={OTHER.title}
              span={OTHER.span}
              role={OTHER.role}
              desc={OTHER.desc}
              location={OTHER.location}
              theme="white"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Careers;
