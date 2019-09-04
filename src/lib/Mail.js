import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

class Mail {
  constructor() {
    const { host, port, security, auth } = mailConfig;

    this.transporter = nodemailer.createTransport({
      host,
      port,
      security,
      auth: auth.user ? auth : null,
    });
  }

  sendMail(message) {
    return this.transporter.sendMail({
      ...mailConfig,
      ...message,
    });
  }
}

export default new Mail();
