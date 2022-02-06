import pichi from "../../resources/images/apps/pichi.png";
import Card from "../../components/Apps/Card";
import styles from "./index.module.scss";
import Banner from "../../components/UI/Banner/Banner";
import banner from "../../resources/images/apps/banner.jpg";

const projects = [
  {
    title: "Pichi's Website",
    desc: "This is a website I created for my pet, Pichi, a cute bengal cat. If you are interested in learning about a cute creature, go for a journey into Pichi's life!",
    img: pichi,
    tools: ["Typescript", "ReactJS", "Gradle"],
    links: {
      github: "https://github.com/XiangZhuang/pichi-app",
      production: "https://www.pichi.link",
    },
  },
  {
    title: "react-easy-notification",
    desc: "A notification component designed for React, supporting typescript and react hooks, and most importantly, easy to use:)",
    tools: ["Typescript", "ReactJS"],
    links: {
      github: "https://github.com/XiangZhuang/react-easy-notification",
      production: "https://www.npmjs.com/package/react-easy-notification",
    },
  },
];

const Index = () => {
  return (
    <div className={styles.apps}>
      <Banner
        title="Johnson's Apps"
        desc="Here are the apps I have developed on my own so far, which include websites and npm packages."
        img={banner}
      />
      <div className={styles.projects}>
        {projects.map((project, index) => {
          const flap = index % 2 == 1;
          return (
            <Card
              title={project.title}
              img={project.img}
              desc={project.desc}
              tools={project.tools}
              links={project.links}
              flap={flap}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;
