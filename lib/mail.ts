import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const verificationLink = `http://localhost:3000/auth/email-verification?token=${token}`;

  await resend.emails.send({
    from: "admin@zenora.tech",
    to: email,
    subject: "Zenora - Email Verification",
    html: `
            <h1>Welcome to Zenora!</h1>
            <p>Thank you for signing up. Please verify your email address by clicking the link below:</p>
            <a href="${verificationLink}">Verify Email</a>
            <p>If you did not sign up for this account, you can ignore this email.</p>
            <p>Best regards,<br>The Zenora Team</p>
        `,
  });
};
