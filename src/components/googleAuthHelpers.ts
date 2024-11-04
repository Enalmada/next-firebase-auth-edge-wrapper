import type { UserCredential } from "firebase/auth";
import type { Dispatch, SetStateAction } from "react";
import { loginWithCredential } from "../api";
import { getFirebaseAuth } from "../auth/firebase";
import {
	getGoogleProvider,
	loginWithProvider,
	loginWithProviderUsingRedirect,
} from "./firebase";

async function handleLogin(
	credential: UserCredential,
	redirectAfterLogin: () => void,
) {
	await loginWithCredential(credential);
	redirectAfterLogin();
}

export function createGoogleLoginHandlers(
	redirectAfterLogin: () => void,
	setHasLogged: Dispatch<SetStateAction<boolean>>,
) {
	return {
		handleLoginWithGoogle: async () => {
			setHasLogged(false);
			const auth = getFirebaseAuth();
			const credential = await loginWithProvider(auth, getGoogleProvider(auth));
			await handleLogin(credential, redirectAfterLogin);
			setHasLogged(true);
		},
		handleLoginWithGoogleUsingRedirect: async () => {
			setHasLogged(false);
			const auth = getFirebaseAuth();
			await loginWithProviderUsingRedirect(auth, getGoogleProvider(auth));
			setHasLogged(true);
		},
	};
}
