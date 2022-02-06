import styles from "./Apps.module.scss";
import Button from "../../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import ninja from "../../../resources/images/apps/cfas_game.png";
import last_one_standing from "../../../resources/images/apps/last_one_standing.png";
import flip_card from "../../../resources/images/apps/flip_cards.png";

const Apps = () => {
  const navigate = useNavigate();
  const showContent = (type: string, appUrl: string) => {};
  return (
    <div className={styles.apps}>
      <div className={styles.display}>
        <div
          className={`${styles.img} ${styles.left}`}
          style={{ backgroundImage: `url(${ninja})` }}
          onClick={() =>
            showContent(
              "app",
              "https://xzhuangaa.student.ust.hk/subs/CFASGAME/"
            )
          }
        >
          <div className={styles.info}>
            <div className={styles.subTitle}>
              <p>Web Game</p>
            </div>
            <div className={styles.title}>
              <p>Ninja Escape</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={`${styles.img} ${styles.up}`}
            style={{ backgroundImage: `url(${last_one_standing})` }}
            onClick={() =>
              showContent(
                "app",
                "https://xzhuangaa.student.ust.hk/subs/last_one_standing/"
              )
            }
          >
            <div className={styles.info}>
              <div className={styles.subTitle}>
                <p>Knowledge Competition</p>
              </div>
              <div className={styles.title}>
                <p>Last One Standing</p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.img} ${styles.down}`}
            style={{ backgroundImage: `url(${flip_card})` }}
            onClick={() =>
              showContent(
                "app",
                "https://xzhuangaa.student.ust.hk/subs/flip_cards/"
              )
            }
          >
            <div className={styles.info}>
              <div className={styles.subTitle}>
                <p>Web Game</p>
              </div>
              <div className={styles.title}>
                <p>Flip Cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <p>Apps</p>
        </div>
        <div className={styles.desc}>
          <p>
            Here displays some of the apps I developed. Click to play. Enjoy
            yourself~ To explore more, please click the button below :)
          </p>
          <p>
            (The server hosting the apps displayed here is under maintenance...
            To see more apps i developed, please click More to explore.)
          </p>
        </div>
        <Button text="More" onClick={() => navigate("/apps")} />
      </div>
    </div>
  );
};

export default Apps;
