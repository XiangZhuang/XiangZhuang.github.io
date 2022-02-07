import styles from "./Educations.module.scss";
import Card from "../Card/Card";

const EDUCATIONS = [
  {
    title: "Hong Kong University of Science and Technology",
    role: "BSc in Computer Science (COSC)",
    desc: "I majored in Computer Science and General Mathematics. During my undergraduate study, I learned general knowledge about object oriented programming (Java & C++), development cycle (agile development), database, machine learning, image processing, and cloud computing. Also, I gained knowledge in math models and  algorithm optimization.",
    location: "Hong Kong SAR",
    span: ["Sep 2017", "Jun 2021"],
  },
  {
    title: "Nanyang Technological University",
    role: "Exchange Program",
    desc: "During the exchange study at Nanyang Technological University, I took courses in cyber security and social media. I learned the variable approaches to secure the applications or enterprise data. Moreover, I picked up Adobe tools including Photoshop and Illustrator for designing.",
    location: "Singapore",
    span: ["Jun 2018", "Jul 2018"],
  },
  {
    title: "Northwestern University",
    role: "Exchange Program",
    desc: "During the exchange study at Northwestern University, I took courses in machine learning teaching ML algorithms ranging from decision tree to neural network, and social science courses about various American culture aspects.",
    location: "Chicago, The United States America",
    span: ["Jan 2020", "Mar 2020"],
  },
];

const Educations = () => {
  return (
    <div className={styles.educations}>
      <div className={styles.title}>
        <p>Educations</p>
      </div>
      <div className={styles.cards}>
        {EDUCATIONS.map((EDUCATION) => {
          return (
            <Card
              title={EDUCATION.title}
              span={EDUCATION.span}
              role={EDUCATION.role}
              desc={EDUCATION.desc}
              location={EDUCATION.location}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Educations;
