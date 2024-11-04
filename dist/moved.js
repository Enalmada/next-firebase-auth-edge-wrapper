// src/moved.ts
import { getToken } from "@firebase/app-check";
import { signOut } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { getTokens } from "next-firebase-auth-edge/lib/next/tokens";
import { getAppCheck } from "./app-check";
import { getFirebaseAuth } from "./auth/firebase";
import { authConfig } from "./config/server-config";
import { toUser } from "./shared/user";
var logout = async () => {
  const auth = getFirebaseAuth();
  await signOut(auth);
  const headers = {};
  if (process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_KEY) {
    const appCheckTokenResponse = await getToken(getAppCheck(), false);
    headers["X-Firebase-AppCheck"] = appCheckTokenResponse.token;
  }
  await fetch("/api/logout", {
    method: "GET",
    headers
  });
};
var resetPassword = async (email) => {
  const auth = getFirebaseAuth();
  await sendPasswordResetEmail(auth, email);
};
var getUser = async (cookies, headers) => {
  const tokens = await getTokens(cookies, {
    ...authConfig,
    headers
  });
  return tokens ? toUser(tokens) : null;
};
export {
  resetPassword,
  logout,
  getUser
};
