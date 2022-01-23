import styles from "./Header.module.scss";
import { Box, Container } from "@mui/material";
import logo from "../../../resources/images/logo.png";
import { NavLink } from "react-router-dom";

const Nav = (props: { link: string; text: string }) => {
  const { link, text } = props;
  return (
    <NavLink
      className={({ isActive }) =>
        `${styles.nav} ${isActive ? styles.navActive : ""}`
      }
      to={link}
    >
      {text}
    </NavLink>
  );
};

const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <Box className={styles.main}>
          <img className={styles.logo} src={logo} alt="logo" />
          <div className={styles.navs}>
            <Nav link="/home" text="Home" />
            <Nav link="/about" text="About" />
            <Nav link="/designs" text="Designs" />
            <Nav link="/apps" text="Apps" />
            <Nav link="/contact" text="Contact" />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Header;
