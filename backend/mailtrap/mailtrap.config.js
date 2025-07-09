
import pkg from "mailtrap";
const { MailtrapClient } = pkg;
import dotenv from "dotenv";
dotenv.config();



 export const mailtrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Ballu",
};


