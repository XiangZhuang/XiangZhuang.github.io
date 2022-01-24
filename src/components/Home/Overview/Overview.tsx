import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "../../UI/Button/Button";
import styles from "./Overview.module.scss";

const Overview = () => {
  const navigate = useNavigate();
  return (
    <Box className={styles.overview}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>Johnson</p>
          <p className={styles.enriched}>Zhuang</p>
        </div>
        <div className={styles.subTitle}>
          <p>Web Application Designer & Developer</p>
        </div>
        <div className={styles.desc}>
          <p>
            Currently a student of the computer science department of HKUST.
            <br />
            Proficient in web application development. I design the web UI,
            develop the frontend, and construct the backend database, building
            up the connection between them.
          </p>
        </div>
        <Button
          text="More"
          onClick={() => {
            navigate("/about");
          }}
        />
      </div>
    </Box>
  );
};

export default Overview;
