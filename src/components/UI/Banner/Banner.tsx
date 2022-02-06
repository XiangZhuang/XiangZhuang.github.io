import styles from "./Banner.module.scss";

interface BannerProps {
  title: string;
  desc: string;
  img: string;
}

const Banner = (props: BannerProps) => {
  const { title, desc, img } = props;
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={styles.cover}>
        <div className={styles.info}>
          <div className={styles.title}>
            <p>{title}</p>
          </div>
          <div className={styles.desc}>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
