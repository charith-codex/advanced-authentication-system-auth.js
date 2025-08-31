# Advanced Authentication System with Next.js 15 & Auth.js

This project is a comprehensive, full-stack authentication solution built with Next.js 15 and Auth.js (NextAuth v5). It serves as a robust template for implementing secure, feature-rich authentication in modern web applications, based on an incredible tutorial by Antonio Erdeljac.

## 🚀 Features
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/60667fd4-189a-4e94-aafd-417b4b802153" />

This authentication system includes a wide range of features essential for a production-ready application:

* **Email Verification:** New users must verify their email address before they can log in.
* **Multiple Login Methods:** Supports both traditional credentials (email/password) and OAuth providers like Google.
* **Password Reset:** Secure flow for users to reset their forgotten passwords via email.
* **User Roles:** Implements role-based access control (Admin/User) to protect specific routes and actions.
* **Secure Settings Management:** Allows users to securely update their profile information, including email and password.
* **Route Protection:** Utilizes Next.js Middleware to protect pages and API routes based on authentication status and user roles.
* **Server-Side Security:** Protects server actions to ensure only authenticated and authorized users can perform sensitive operations.
* **Auth.js Callbacks:** Leverages callbacks to customize and control the authentication flow.

## 🛠️ Tech Stack

| Category           | Technology                                        |
| ------------------ | ------------------------------------------------- |
| **Framework** | Next.js 15 (App Router + Server Actions)          |
| **Authentication** | Auth.js (NextAuth v5)                             |
| **Database** | PostgreSQL, Prisma ORM, Neon                      |
| **UI Components** | Shadcn UI, Tailwind CSS                           |
| **Email Service** | Resend for transactional emails                   |
| **Validation** | Zod                                               |

## ⚙️ Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

* Node.js (v18 or later)
* npm
* A PostgreSQL database (e.g., from [Neon](https://neon.tech/))

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/charith-codex/advanced-authentication-system-auth.js.git](https://github.com/charith-codex/advanced-authentication-system-auth.js.git)
    cd advanced-authentication-system-auth.js
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up your environment variables:**
    Create a `.env` file in the root of your project and add the necessary environment variables for your database, Auth.js, Google OAuth, and Resend.
    ```env
    # Database
    DATABASE_URL="YOUR_POSTGRESQL_URL"

    # Auth.js
    AUTH_SECRET="YOUR_AUTH_SECRET" # Generate one: openssl rand -base64 32

    # Google OAuth
    AUTH_GOOGLE_ID="YOUR_GOOGLE_CLIENT_ID"
    AUTH_GOOGLE_SECRET="YOUR_GOOGLE_CLIENT_SECRET"

    # Resend
    RESEND_API_KEY="YOUR_RESEND_API_KEY"
    ```

4.  **Push the database schema:**
    ```sh
    npx prisma db push
    ```

5.  **Run the development server:**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🙏 Acknowledgements

This project was built by following the excellent and in-depth tutorial on YouTube by Antonio Erdeljac.
* [Watch the Tutorial](https://www.youtube.com/watch?v=1T_35Jz_R-c)

