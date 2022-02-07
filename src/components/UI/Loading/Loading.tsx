import styles from "./Loading.module.scss";
import { BiLoaderAlt } from "react-icons/bi";

interface LoadingProps {
  size?: "small" | "large" | "medium";
}

const Loading = (props: LoadingProps) => {
  const { size = "medium" } = props;
  return <BiLoaderAlt className={`${styles.loading} ${styles[size]}`} />;
};

export default Loading;
