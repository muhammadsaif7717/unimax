import nodemailer from 'nodemailer';

export const sendEmail = async (email: string, emailType: string) => {
  try {
    //! configare mail for usage

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: 'maddison53@ethereal.email',
        pass: 'jn7jnAPss4f63QBp6D',
      },
    });

    const mailOptions = {
      from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
      to: email,
      subject: emailType === 'verify' ? 'Verify your email' : 'Reset your password',
      html: '<b>Hello world?</b>', // you can change this to your template
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // rethrow to catch it in higher layers if needed
  }
};
