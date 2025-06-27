/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */

export const publicRoutes = [
  "/",
  "/auth/email-verification", // access both login and logout users
];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged-in users to the home page.
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/reset",
  "/auth/reset-password",
];

/**
 * The prefix for API authentication routes.
 * These routes are used for API authentication
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after a successful login.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
