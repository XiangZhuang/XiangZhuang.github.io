import styles from "./Card.module.scss";
import { IoLocationOutline } from "react-icons/io5";

interface CardProps {
  title: string;
  span: Array<string>;
  role: string;
  desc: string;
  location: string;
  theme?: "white" | "dark";
}

const Card = (props: CardProps) => {
  const { title, span, role, desc, location, theme = "white" } = props;
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <div className={styles.overview}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.span}>
          <p>
            {span[0]} - {span[1]}
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.role}>
          <p>{role}</p>
        </div>
        <div className={styles.desc}>
          <p>{desc}</p>
        </div>
        <div className={styles.location}>
          <IoLocationOutline className={styles.icon} />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
