import User from '@/models/userModel';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';

export const sendEmail = async (email: string, emailType: string, userId: string) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    if (emailType === 'VERIFY') {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === 'RESET') {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    // Looking to send emails in production? Check out our Email API/SMTP product!
    const transport = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '65400747448f20',
        pass: '1371919d047145',
      },
    });

    const mailOptions = {
      from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
      to: email,
      subject: emailType === 'verify' ? 'Verify your email' : 'Reset your password',
      html: `
        <p>Click the link below to ${emailType === 'VERIFY' ? 'verify your email' : 'reset your password'}:</p>
        <a href="${process.env.NEXT_PUBLIC_URL}/${emailType.toLowerCase()}?token=${hashedToken}">Click here</a>
        <p>This link will expire in 1 hour.</p>
      `,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // rethrow to catch it in higher layers if needed
  }
};
