import styles from "./Button.module.scss";
import Loading from "../Loading/Loading";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const { text, onClick, loading = false } = props;
  return (
    <div
      className={`${styles.button} ${loading ? styles.disabled : ""}`}
      onClick={() => {
        if (!loading && !!onClick) {
          onClick();
        }
      }}
    >
      {loading ? <Loading /> : <p>{text}</p>}
    </div>
  );
};

export default Button;
