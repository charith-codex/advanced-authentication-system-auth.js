import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordRestEmail = async (email: string, token: string) => {
  const passwordResetLink = `http://localhost:3000/auth/reset-password?token=${token}`;

  await resend.emails.send({
    from: "admin@zenora.tech",
    to: email,
    subject: "Zigma Institute - Reset Your Password",
    html: `
            <h1>Reset Your Password</h1>
            <p>We received a request to reset your password. Click the link below to set a new password:</p>
            <a href="${passwordResetLink}">Reset Password</a>
            <p>If you did not request this, you can ignore this email.</p>
            <p>Best regards,<br>The Zigma Institute</p>
        `,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const verificationLink = `http://localhost:3000/auth/email-verification?token=${token}`;

  await resend.emails.send({
    from: "admin@zenora.tech",
    to: email,
    subject: "Zigma Institute - Email Verification",
    html: `
            <h1>Welcome to Zigma Institute!</h1>
            <p>Thank you for signing up. Please verify your email address by clicking the link below:</p>
            <a href="${verificationLink}">Verify Email</a>
            <p>If you did not sign up for this account, you can ignore this email.</p>
            <p>Best regards,<br>The Zigma Institute</p>
        `,
  });
};
