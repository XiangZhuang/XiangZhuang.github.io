import styles from "./Careers.module.scss";
import Card from "../Card/Card";

const CAREERS = [
  {
    title: "Hong Kong University of Science and Technology",
    role: "Student Helper (Information Systems Department)",
    desc: "I developed the second generation of a survey system (AngularJS & MySQL) used by the professor, collecting data from more than 1,000 interviewees.",
    location: "Hong Kong SAR",
    span: ["Jan 2018", "Mar 2018"],
  },
  {
    title: "Apex Dermatology Institute",
    role: "Full Stack Developer",
    desc: "I designed and developed the new version of doctor searching engine website (at https://hk-specialist.com/) from draft (PHP) and the database (MySQL) supporting the system. I coded script (Python) to scratch the doctor information from multiple sites for data support.",
    location: "Hong Kong SAR",
    span: ["Sep 2020", "Dec 2020"],
  },
  {
    title: "D-Engraver Limited",
    role: "Software Engineer",
    desc: "I participated in the development of asset tracking system based on blockchain technology. I was mainly in charge of the UI development and database configuration of the third iteration of the product and built the auto end-to-end testing system from draft.",
    location: "Hong Kong SAR",
    span: ["Dec 2020", "May 2021"],
  },
  {
    title: "Credit Suisse",
    role: "Technology Analyst",
    desc: "As a technology analyst, I am supposed rotate to different IT teams exploring how Credit Suisse applies technology to support its main business. So far, I've been developing both frontend (using React) and backend (Kotlin + Springboot) of the structure products pricing system.",
    location: "Hong Kong SAR",
    span: ["Aug 2021", "Now"],
  },
];

const Careers = () => {
  return (
    <div className={styles.careers}>
      <div className={styles.title}>
        <p>Careers</p>
      </div>
      <div className={styles.cards}>
        {CAREERS.map((CAREER) => {
          return (
            <Card
              title={CAREER.title}
              span={CAREER.span}
              role={CAREER.role}
              desc={CAREER.desc}
              location={CAREER.location}
              theme="dark"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Careers;
