import styles from "./Designs.module.scss";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import joker from "../../../resources/images/designs/joker_01.jpg";
import deadpool from "../../../resources/images/designs/deadpool.jpg";
import jojo from "../../../resources/images/designs/jojo_01.jpg";

const Designs = () => {
  const navigate = useNavigate();
  const showContent = (type: string, imgUrl: string) => {};
  return (
    <div className={styles.designs}>
      <div className={styles.info}>
        <div className={styles.title}>
          <p>Designs</p>
        </div>
        <div className={styles.desc}>
          <p>
            Here displays some of my art works. To view more designs of mine,
            please click the button below :)
          </p>
        </div>
        <Button text="More" onClick={() => navigate("/designs")} />
      </div>
      <div className={styles.display}>
        <div
          className={`${styles.img} ${styles.up}`}
          style={{ backgroundImage: `url(${joker})` }}
          onClick={() => showContent("img", joker)}
        >
          <div className={styles.info}>
            <div className={styles.subTitle}>
              <p>DC Character</p>
            </div>
            <div className={styles.title}>
              <p>Joker</p>
            </div>
          </div>
        </div>
        <div className={styles.down}>
          <div
            className={`${styles.img} ${styles.left}`}
            style={{ backgroundImage: `url(${deadpool})` }}
            onClick={() => showContent("img", deadpool)}
          >
            <div className={styles.info}>
              <div className={styles.subTitle}>
                <p>Marvel Character</p>
              </div>
              <div className={styles.title}>
                <p>Deadpool</p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.img} ${styles.right}`}
            style={{ backgroundImage: `url(${jojo})` }}
            onClick={() => showContent("img", jojo)}
          >
            <div className={styles.info}>
              <div className={styles.subTitle}>
                <p>JoJo's Bizzare Adventure</p>
              </div>
              <div className={styles.title}>
                <p>Phantom Blood</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designs;
