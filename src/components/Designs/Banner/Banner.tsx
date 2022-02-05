import styles from "./Banner.module.scss";
import banner from "../../../resources/images/designs/banner.jpg";

const Banner = () => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className={styles.cover}>
        <div className={styles.info}>
          <div className={styles.title}>
            <p>Johnson's Designs</p>
          </div>
          <div className={styles.desc}>
            <p>
              Here displays my art works, which include paintings, photos, and
              PS work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
