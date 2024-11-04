// src/config/server-config.ts
import { clientConfig } from "./client-config";
var serverConfig = {
  useSecureCookies: process.env.USE_SECURE_COOKIES === "true",
  firebaseApiKey: process.env.FIREBASE_API_KEY,
  serviceAccount: process.env.FIREBASE_ADMIN_PRIVATE_KEY ? {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n")
  } : undefined
};
var authConfig = {
  apiKey: serverConfig.firebaseApiKey,
  cookieName: "AuthToken",
  cookieSignatureKeys: [
    process.env.COOKIE_SECRET_CURRENT,
    process.env.COOKIE_SECRET_PREVIOUS
  ],
  cookieSerializeOptions: {
    path: "/",
    httpOnly: true,
    secure: serverConfig.useSecureCookies,
    sameSite: "lax",
    maxAge: 12 * 60 * 60 * 24
  },
  serviceAccount: serverConfig.serviceAccount,
  enableMultipleCookies: true,
  enableCustomToken: true,
  experimental_enableTokenRefreshOnExpiredKidHeader: true,
  debug: false,
  tenantId: clientConfig.tenantId
};
export {
  serverConfig,
  authConfig
};
