import { FirebaseError } from "@firebase/util";
import {
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
} from "firebase/auth";
import type { Dispatch, SetStateAction } from "react";
import { loginWithCredential } from "../api";
import { getFirebaseAuth } from "../auth/firebase";

type SetLoggedFunction = Dispatch<SetStateAction<boolean>>;

// Define a generic type for the error setter function
type SetErrorFunction<T> = (
	field: keyof T | "root",
	error: { type: string; message: string },
) => void;

type FormData = {
	email: string;
	password: string;
};

async function submitPasswordForm(
	{ email, password }: FormData,
	isSignIn: boolean,
	setHasLogged: SetLoggedFunction,
	setError: SetErrorFunction<FormData>,
	redirectAfterLogin: () => void, // pass this as a parameter
) {
	const auth = getFirebaseAuth();

	try {
		const credential = isSignIn
			? await signInWithEmailAndPassword(auth, email, password)
			: await createUserWithEmailAndPassword(auth, email, password);

		await loginWithCredential(credential);

		if (!isSignIn) {
			await sendEmailVerification(credential.user);
		}
		redirectAfterLogin();
		setHasLogged(true);
	} catch (error: unknown) {
		setHasLogged(false);

		if (
			error instanceof FirebaseError &&
			error.code === "auth/wrong-password"
		) {
			setError("root", {
				type: "auth/wrong-password",
				message: "The email/password combination not found",
			});
			return;
		}

		if (
			error instanceof FirebaseError &&
			error.code === "auth/user-not-found"
		) {
			setError("root", {
				type: "auth/user-not-found",
				message: "The email/password combination not found",
			});
			return;
		}

		if (
			error instanceof FirebaseError &&
			error.code === "auth/email-already-in-use"
		) {
			setError("root", {
				type: "auth/email-already-in-use",
				message: "The email already exists",
			});
			return;
		}

		setError("root", {
			type: "unknown",
			message: (error as Error).message || "Unknown error",
		});
	}
}

export { submitPasswordForm };
