import styles from "./Card.module.scss";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface CardProps {
  title: string;
  desc: string;
  img?: string;
  tools: Array<string>;
  links?: {
    github?: string;
    production?: string;
  };
  flap?: boolean;
}

const Card = (props: CardProps) => {
  const { title, desc, img, tools, links = {}, flap = false } = props;
  const { github, production } = links;
  return (
    <div className={`${styles.card} ${flap ? styles.flap : ""}`}>
      {!!img ? (
        <div
          className={`${styles.img} ${production ? styles.clickable : ""}`}
          style={{
            backgroundImage: `url(${img})`,
          }}
          onClick={() => {
            if (production) window.open(production, "_blank");
          }}
        />
      ) : null}
      <div className={styles.content}>
        <div className={styles.title} onClick={() => {}}>
          {production ? (
            <a href={production} target="_blank">
              {title}
            </a>
          ) : (
            <p>{title}</p>
          )}
        </div>
        <div className={styles.desc}>
          <p>{desc}</p>
        </div>
        <div className={styles.tools}>
          {tools.map((tool) => (
            <p>{tool}</p>
          ))}
        </div>
        {github || production ? (
          <div className={styles.externals}>
            {github ? (
              <div
                className={styles.external}
                onClick={() => window.open(github, "_blank")}
              >
                <FiGithub />
              </div>
            ) : null}
            {production ? (
              <div
                className={styles.external}
                onClick={() => window.open(production, "_blank")}
              >
                <FiExternalLink />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
