// src/components/authHelpers.ts
import { FirebaseError } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword
} from "firebase/auth";
import { loginWithCredential } from "../api";
import { getFirebaseAuth } from "../auth/firebase";
async function submitPasswordForm({ email, password }, isSignIn, setHasLogged, setError, redirectAfterLogin) {
  const auth = getFirebaseAuth();
  try {
    const credential = isSignIn ? await signInWithEmailAndPassword(auth, email, password) : await createUserWithEmailAndPassword(auth, email, password);
    await loginWithCredential(credential);
    if (!isSignIn) {
      await sendEmailVerification(credential.user);
    }
    redirectAfterLogin();
    setHasLogged(true);
  } catch (error) {
    setHasLogged(false);
    if (error instanceof FirebaseError && error.code === "auth/wrong-password") {
      setError("root", {
        type: "auth/wrong-password",
        message: "The email/password combination not found"
      });
      return;
    }
    if (error instanceof FirebaseError && error.code === "auth/user-not-found") {
      setError("root", {
        type: "auth/user-not-found",
        message: "The email/password combination not found"
      });
      return;
    }
    if (error instanceof FirebaseError && error.code === "auth/email-already-in-use") {
      setError("root", {
        type: "auth/email-already-in-use",
        message: "The email already exists"
      });
      return;
    }
    setError("root", {
      type: "unknown",
      message: error.message || "Unknown error"
    });
  }
}
export {
  submitPasswordForm
};
