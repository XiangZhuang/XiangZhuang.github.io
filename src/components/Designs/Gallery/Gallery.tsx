import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Gallery.module.scss";
import jojo1 from "../../../resources/images/designs/jojo_01.jpg";
import joker1 from "../../../resources/images/designs/joker_01.jpg";
import one_punch from "../../../resources/images/designs/one_punch_01.jpg";
import mk46 from "../../../resources/images/designs/mk46.jpg";
import deadpool from "../../../resources/images/designs/deadpool.jpg";
import captain from "../../../resources/images/designs/captain.jpg";
import doctor from "../../../resources/images/designs/doctor.jpg";
import sunset from "../../../resources/images/designs/sunset.jpg";
import moth from "../../../resources/images/designs/moth.jpg";
import me from "../../../resources/images/designs/me.jpg";
import welcome from "../../../resources/images/designs/welcome.jpg";
import firework from "../../../resources/images/designs/firework.jpg";
import Photo from "./Photo/Photo";
import Loading from "../../UI/Loading/Loading";

enum DesignType {
  ALL,
  ART,
  DESIGN,
  PHOTO,
}

const CATEGORIES = [
  {
    label: "All",
    value: DesignType.ALL,
  },
  {
    label: "Art",
    value: DesignType.ART,
  },
  {
    label: "Design",
    value: DesignType.DESIGN,
  },
  {
    label: "Photo",
    value: DesignType.PHOTO,
  },
];

const DESIGNS = [
  {
    title: "JoJo",
    desc: "The very beginning of JoJo's Bizarre Adventure, pacing the way for 300 yrs' Fate of Blood",
    img: jojo1,
    type: DesignType.ART,
  },
  {
    title: "Joker",
    desc: "So much impressed by the acting of Heathcliff Andrew Ledger in The Dark Knight, I drew this Joker under the light in the dark.",
    img: joker1,
    type: DesignType.ART,
  },
  {
    title: "One Punch Man",
    desc: "This is JoJo",
    img: one_punch,
    type: DesignType.ART,
  },
  {
    title: "Iron Man MK46 (HT)",
    desc: "I proceeded the photo of the 1/6 figure Iron Man MK46 from Hottoys by Procreate.",
    img: mk46,
    type: DesignType.DESIGN,
  },
  {
    title: "DeadPool (HT)",
    desc: "I processed the photo of the 1/6 figure Deadpool from Hottoys by Procreate.",
    img: deadpool,
    type: DesignType.DESIGN,
  },
  {
    title: "Captain America (HT)",
    desc: "I proceeded the photo of the 1/6 figure Captain America from Hottoys by Procreate.",
    img: captain,
    type: DesignType.DESIGN,
  },
  {
    title: "Doctor Strange (HT)",
    desc: "I proceeded the photo of the 1/6 figure Doctor Strange from Hottoys by Procreate.",
    img: doctor,
    type: DesignType.DESIGN,
  },
  {
    title: "Sunset",
    desc: "Sunset of the seaside in the Hong Kong University of Science and Technology",
    img: sunset,
    type: DesignType.PHOTO,
  },
  {
    title: "Moth",
    desc: "Moth on the wall.",
    img: moth,
    type: DesignType.PHOTO,
  },
  {
    title: "Love Yourself",
    desc: "Look through a pair of glasses with special effects at a poster",
    img: me,
    type: DesignType.PHOTO,
  },
  {
    title: "Welcome",
    desc: "Look through a pair of glasses with special effects at a poster",
    img: welcome,
    type: DesignType.PHOTO,
  },
  {
    title: "Firework",
    desc: "The firework show at Victoria Harbar on 1st Octobor in 2018.",
    img: firework,
    type: DesignType.PHOTO,
  },
];

const Gallery = () => {
  const columnsRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState(DesignType.ALL);
  const [columns, setColumns] = useState<Array<Array<ReactNode>>>([[], [], []]);
  const [loading, setLoading] = useState(false);

  const generateColumns = async () => {
    setLoading(true);
    const columns: Array<Array<ReactNode>> = Array.from(
      Array(columnsRef.current?.children.length),
      () => []
    );
    const colNum = columns.length;
    const column_imgs: Array<Array<number>> = [];
    for (let i = 0; i < colNum; i += 1) {
      column_imgs.push([]);
    }
    const promises = [];
    const designs = DESIGNS.filter((design) =>
      category === DesignType.ALL ? true : design.type === category
    );
    for (const i in designs) {
      const design = designs[i];
      const columnIndex = getShortestColumn(column_imgs);
      promises.push(
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = design.img;
          img.onload = () => {
            column_imgs[columnIndex].push(img.height * (100 / img.width));
            columns[columnIndex].push(
              <Photo
                img={design.img}
                id={parseInt(i)}
                key={i}
                name={design.title}
              />
            );
            resolve();
          };
        })
      );
      await promises[promises.length - 1];
    }
    setColumns(columns);
    setLoading(false);
  };

  const getShortestColumn = (columns: Array<Array<number>>) => {
    const heights = columns.map((column) =>
      column.length
        ? column.reduce((sum: number, value: number) => sum + value)
        : 0
    );
    return heights.indexOf(Math.min(...heights));
  };

  useEffect(() => {
    generateColumns();
  }, [category]);
  return (
    <div className={styles.gallery}>
      <div className={styles.categories}>
        {CATEGORIES.map((CATEGORY) => {
          return (
            <div
              key={CATEGORY.value}
              className={`${styles.category} ${
                CATEGORY.value === category ? styles.selected : ""
              }`}
              onClick={() => {
                setCategory(CATEGORY.value);
              }}
            >
              <p>{CATEGORY.label}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.columns} ref={columnsRef}>
        {loading ? (
          <div className={styles.loading}>
            <Loading size="large" />
          </div>
        ) : null}
        <div className={styles.column}>{columns[0].map((photo) => photo)}</div>
        <div className={styles.column}>{columns[1].map((photo) => photo)}</div>
        <div className={styles.column}>{columns[2].map((photo) => photo)}</div>
      </div>
    </div>
  );
};

export default Gallery;
