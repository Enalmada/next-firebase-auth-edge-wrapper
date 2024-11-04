// src/actions/user-counters.ts
import { getFirestore } from "firebase-admin/firestore";
import { getTokens } from "next-firebase-auth-edge";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { authConfig } from "../config/server-config";
import { getFirebaseAdminApp } from "../firebase";
"use server";
async function incrementCounter() {
  const tokens = await getTokens(await cookies(), authConfig);
  if (!tokens) {
    throw new Error("Cannot update counter of unauthenticated user");
  }
  const db = getFirestore(getFirebaseAdminApp());
  const snapshot = await db.collection("user-counters").doc(tokens.decodedToken.uid).get();
  const currentUserCounter = snapshot.data();
  if (!snapshot.exists || !currentUserCounter) {
    const userCounter = {
      id: tokens.decodedToken.uid,
      count: 1
    };
    await snapshot.ref.create(userCounter);
  }
  const newUserCounter = {
    ...currentUserCounter,
    count: currentUserCounter?.count + 1
  };
  await snapshot.ref.update(newUserCounter);
  revalidatePath("/");
}
export {
  incrementCounter
};
