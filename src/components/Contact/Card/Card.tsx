import styles from "./Card.module.scss";
import github from "../../../resources/images/icons/github_white.png";
import facebook from "../../../resources/images/icons/facebook_white.png";
import instagram from "../../../resources/images/icons/instagram_white.png";
import linkedin from "../../../resources/images/icons/linkedin_white.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import { useNotification } from "react-easy-notification";

const Card = () => {
  const { pushNotification } = useNotification();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const isValid = () => {
    if (!name) {
      pushNotification({
        type: "danger",
        text: "Name should not be empty",
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
    if (!phone) {
      pushNotification({
        type: "danger",
        text: "Phone should not be empty",
      });
      return false;
    }
    if (!message) {
      pushNotification({
        type: "danger",
        text: "Message should not be empty",
      });
      return false;
    }
    return true;
  };
  const submitContact = () => {
    if (isValid()) {
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.title}>
          <p>Contact Me</p>
        </div>
        <div className={styles.details}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <AiOutlineMail />
            </div>
            <div className={styles.desc}>
              <a href="mailto:xzhuangaa@connect.ust.hk">
                xzhuangaa@connect.ust.hk
              </a>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <BsTelephone />
            </div>
            <div className={styles.desc}>
              <a href="tel:+852 67651849">+852 67651849</a>
            </div>
          </div>
          <div className={styles.externals}>
            <a
              className={styles.external}
              target="_blank"
              href="https://www.linkedin.com/in/johnson-zhuang-6003331bb"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              className={styles.external}
              target="_blank"
              href="https://www.facebook.com/xzhuangaa"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              className={styles.external}
              target="_blank"
              href="https://github.com/XiangZhuang"
            >
              <img src={github} alt="Github" />
            </a>
            <a
              className={styles.external}
              target="_blank"
              href="https://www.instagram.com/zhuang_xiang_johnson/"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.formBlock}>
        <div className={styles.msg}>
          <div className={styles.title}>
            <p>I would be very pleased to hear from you!</p>
          </div>
          <div className={styles.txt}>
            <p>
              Please input your basic information and the message you want to
              send to me.
            </p>
          </div>
        </div>
        <div className={styles.form} id="form">
          <div className={styles.item}>
            <div className={styles.title}>Name</div>
            <div className={styles.input}>
              <input
                type="text"
                name="name"
                id="form-name"
                onChange={(evt) => setName(evt.target.value)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Email</div>
            <div className={styles.input}>
              <input
                type="text"
                name="email"
                id="form-email"
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Phone</div>
            <div className={styles.input}>
              <input
                type="text"
                name="phone"
                id="form-phone"
                onChange={(evt) => setPhone(evt.target.value)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Message</div>
            <div className={styles.input}>
              <textarea
                name="message"
                id="form-message"
                onChange={(evt) => setMessage(evt.target.value)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <Button text="Send" onClick={() => submitContact()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
