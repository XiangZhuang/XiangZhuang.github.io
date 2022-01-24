import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { text, onClick } = props;
  return (
    <div className={styles.button} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};

export default Button;
