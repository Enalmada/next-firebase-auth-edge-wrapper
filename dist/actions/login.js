// src/actions/login.ts
import { signInWithEmailAndPassword } from "firebase/auth";
import { refreshCookiesWithIdToken } from "next-firebase-auth-edge/lib/next/cookies";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getFirebaseAuth } from "../auth/firebase";
import { authConfig } from "../config/server-config";
"use server";
async function loginAction(username, password) {
  const credential = await signInWithEmailAndPassword(getFirebaseAuth(), username, password);
  const idToken = await credential.user.getIdToken();
  await refreshCookiesWithIdToken(idToken, await headers(), await cookies(), authConfig);
  redirect("/app");
}
export {
  loginAction
};
