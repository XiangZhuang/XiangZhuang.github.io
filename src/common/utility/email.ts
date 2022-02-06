import { init, send } from "emailjs-com";
import EMAIL_KEY from "../credential/emailKey";

export const sendContactForm = async (payload: {
  name?: string;
  email: string;
  phone?: string;
  message: string;
}) => {
  init(EMAIL_KEY.USER_ID);
  await send(
    EMAIL_KEY.SERVICE_ID,
    EMAIL_KEY.TEMPLATE_ID,
    payload,
    EMAIL_KEY.USER_ID
  );
};
