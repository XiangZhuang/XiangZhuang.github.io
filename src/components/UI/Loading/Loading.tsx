import styles from "./Loading.module.scss";
import { BiLoaderAlt } from "react-icons/bi";

const Loading = () => {
  return <BiLoaderAlt className={styles.loading} />;
};

export default Loading;
