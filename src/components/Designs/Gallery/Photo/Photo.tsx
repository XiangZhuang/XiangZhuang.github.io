import styles from "./Photo.module.scss";

interface PhotoProps {
  img: string;
  id: number;
  name: string;
  onClick?: () => void;
}

const Photo = (props: PhotoProps) => {
  const { img, id, name, onClick } = props;

  return (
    <div className={styles.photo} id={`img-block-${id}`} onClick={onClick}>
      <img src={img} alt="Pichi Photo" />
      <div className={styles.cover}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Photo;
