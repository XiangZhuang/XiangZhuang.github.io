import styles from "./Music.module.scss";
import { useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { BsMusicNoteBeamed } from "react-icons/bs";
import music from "../../../resources/media/egyptian.mp3";

const Music = () => {
  const [audio] = useState(new Audio(music));
  audio.volume = 0.1;
  audio.loop = true;
  const [show, setShow] = useState(false);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    play ? audio.play() : audio.pause();
  }, [play]);
  return (
    <div
      className={styles.music}
      style={{
        right: show ? 0 : -55,
      }}
    >
      <div
        className={`${styles.arrow} ${show ? styles.rotate : ""}`}
        onClick={() => setShow(!show)}
      >
        <AiOutlineLeft />
      </div>
      <div
        className={`${styles.icon} ${play ? styles.playing : ""}`}
        onClick={() => setPlay(!play)}
      >
        <BsMusicNoteBeamed />
      </div>
    </div>
  );
};

export default Music;
