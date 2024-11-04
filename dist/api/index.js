// src/api/index.ts
import { getToken } from "@firebase/app-check";
import { getAppCheck } from "../app-check";
async function login(token) {
  const headers = {
    Authorization: `Bearer ${token}`
  };
  if (process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_KEY) {
    const appCheckTokenResponse = await getToken(getAppCheck(), false);
    headers["X-Firebase-AppCheck"] = appCheckTokenResponse.token;
  }
  await fetch("/api/login", {
    method: "GET",
    headers
  });
}
async function loginWithCredential(credential) {
  const idToken = await credential.user.getIdToken();
  await login(idToken);
}
async function logout() {
  const headers = {};
  if (process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_KEY) {
    const appCheckTokenResponse = await getToken(getAppCheck(), false);
    headers["X-Firebase-AppCheck"] = appCheckTokenResponse.token;
  }
  await fetch("/api/logout", {
    method: "GET",
    headers
  });
}
async function checkEmailVerification() {
  const headers = {};
  if (process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_KEY) {
    const appCheckTokenResponse = await getToken(getAppCheck(), false);
    headers["X-Firebase-AppCheck"] = appCheckTokenResponse.token;
  }
  await fetch("/api/check-email-verification", {
    method: "GET",
    headers
  });
}
export {
  logout,
  loginWithCredential,
  login,
  checkEmailVerification
};
