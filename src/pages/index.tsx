import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import styles from "./index.module.scss";

const Pages = () => {
  return (
    <div className={styles.pages}>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Pages;
