import styles from "./Name.module.scss";

const Name = () => {
  return (
    <div className={styles.name}>
      <p>Johnson</p>
      <p className={styles.enriched}>Zhuang</p>
    </div>
  );
};

export default Name;
