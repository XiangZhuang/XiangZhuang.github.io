import styles from "./Footer.module.scss";
import { Container } from "@mui/material";
import logo from "../../../resources/images/logo.png";
import linkedin from "../../../resources/images/icons/linkedin.png";
import facebook from "../../../resources/images/icons/facebook.png";
import github from "../../../resources/images/icons/github.png";
import instagram from "../../../resources/images/icons/instagram.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotification } from "react-easy-notification";

const navs = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Designs",
    link: "/designs",
  },
  {
    name: "Apps",
    link: "/apps",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const { pushNotification } = useNotification();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const isContactValid = () => {
    if (!message) {
      pushNotification({
        type: "danger",
        text: "Message should not be empty",
      });
      return false;
    }
    if (!email) {
      pushNotification({
        type: "danger",
        text: "Email should not be empty",
      });
      return false;
    }
    const emailRegex = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
    if (!emailRegex.test(email)) {
      pushNotification({
        type: "danger",
        text: "Invalid email format",
      });
      return false;
    }
    return true;
  };
  const submitFooterContact = () => {
    if (isContactValid()) {
      pushNotification({
        type: "success",
        text: "Thank you for contacting me! I will reply to you as soon as possible.",
      });
      // TODO: Email implementation using third-party api
    }
  };
  return (
    <div className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.socialMedias}>
            <a
              className={styles.socialMedia}
              target="_blank"
              href="https://www.linkedin.com/in/johnson-zhuang-6003331bb"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              className={styles.socialMedia}
              target="_blank"
              href="https://www.facebook.com/xzhuangaa"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              className={styles.socialMedia}
              target="_blank"
              href="https://github.com/XiangZhuang"
            >
              <img src={github} alt="LinkedIn" />
            </a>
            <a
              className={styles.socialMedia}
              target="_blank"
              href="https://www.instagram.com/zhuang_xiang_johnson/"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <div className={styles.copyright}>
            <p className={styles.github}>
              View this site on{" "}
              <a
                href="https://github.com/XiangZhuang/XiangZhuang.github.io"
                target="_blank"
              >
                Github
              </a>
            </p>
            <p>Copyright © 2021 Johnson Z. All Rights Reserved</p>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.navs}>
            <div className={styles.title}>
              <p>Explore</p>
            </div>
            {navs.map((nav, index) => {
              return (
                <div
                  key={index}
                  className={styles.nav}
                  onClick={() => navigate(nav.link)}
                >
                  <p>{nav.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.contact}>
            <div className={styles.title}>
              <p>Contact</p>
            </div>
            <div className={styles.form}>
              <textarea
                name="content"
                cols={30}
                rows={8}
                placeholder="Message"
                onChange={(evt) => setMessage(evt.target.value)}
              />
              <div className={styles.email}>
                <input
                  type="text"
                  placeholder="Your Email"
                  onChange={(evt) => setEmail(evt.target.value)}
                />
                <div className={styles.submit} onClick={submitFooterContact}>
                  <p>Send</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
