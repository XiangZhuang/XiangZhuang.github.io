import { Box } from "@mui/material";
import styles from "./Experience.module.scss";
import { useState } from "react";
import cfas_web from "../../../resources/images/experiences/cfas_web.jpg";
import dengraver from "../../../resources/images/experiences/dengraver.jpg";
import credit_suisse from "../../../resources/images/experiences/credit_suisse.jpg";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const experiences = [
  {
    tag: "Society",
    title: "Technology & Information Secretary",
    organization: "Chinese Folk Art Society (HKUST)",
    desc: "I helped maintain the official website, develop games and systems, and design powerpoints for functions held by the society.",
    img: cfas_web,
    link: "cfas",
  },
  {
    tag: "Internship I",
    title: "Software Engineer",
    organization: "Data Engraver Limit",
    desc: "I helped develop a education e-tracking web app and a mobile app for tracking industrial assets.",
    img: dengraver,
    link: "dengraver",
  },
  {
    tag: "Internship II",
    title: "Technology Summer Analyst",
    organization: "Credit Suisse",
    desc: "I developed a web application to handle the dead letter events that happened during message passing with ReactJS for the user interface and Kotlin for the microservices.",
    img: credit_suisse,
    link: "credit-suisse",
  },
];

const Experience = () => {
  const [curr, setCurr] = useState(0);
  const navigate = useNavigate();
  return (
    <Box className={styles.experience}>
      <div className={styles.displayer}>
        <div className={styles.imgContainer}>
          {experiences.map((experience, index) => {
            return (
              <div
                key={index}
                className={`${styles.img} ${
                  index === curr ? styles.selected : ""
                }`}
                style={{
                  backgroundImage: `url(${experience.img})`,
                }}
              />
            );
          })}
        </div>
        <div className={styles.navs}>
          {experiences.map((experience, index) => {
            return (
              <div
                key={index}
                className={`${styles.nav} ${
                  index === curr ? styles.selected : ""
                }`}
                style={{
                  top: index
                    ? experiences
                        .slice(0, index)
                        .reduce(
                          (prev, curr) => prev + curr.tag.length * 4 + 15 * 2,
                          0
                        )
                    : 0,
                  zIndex: 99 - Math.abs(curr - index),
                }}
                onClick={() => {
                  setCurr(index);
                }}
              >
                <p>{experience.tag}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <p>My Experience</p>
        </div>
        <div className={styles.contents}>
          {experiences.map((experience, index) => {
            return (
              <div
                key={index}
                className={`${styles.content} ${
                  curr === index ? styles.selected : ""
                }`}
              >
                <div className={styles.title}>
                  <p>{experience.title}</p>
                </div>
                <div className={styles.organization}>
                  <p>{experience.organization}</p>
                </div>
                <div className={styles.desc}>
                  <p>{experience.desc}</p>
                </div>
                <Button text="More" onClick={() => navigate("/about")} />
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

export default Experience;
