import { getToken } from "@firebase/app-check";
import { signOut } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { getTokens } from "next-firebase-auth-edge/lib/next/tokens";
import { getAppCheck } from "./app-check";
import { getFirebaseAuth } from "./auth/firebase";
import { authConfig } from "./config/server-config";
import { toUser } from "./shared/user";

export const logout = async () => {
	const auth = getFirebaseAuth();
	await signOut(auth);

	const headers: Record<string, string> = {};

	// This is optional. Use it if your app supports App Check – https://firebase.google.com/docs/app-check
	if (process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_KEY) {
		const appCheckTokenResponse = await getToken(getAppCheck(), false);

		headers["X-Firebase-AppCheck"] = appCheckTokenResponse.token;
	}

	await fetch("/api/logout", {
		method: "GET",
		headers,
	});
};

export const resetPassword = async (email: string) => {
	const auth = getFirebaseAuth();
	await sendPasswordResetEmail(auth, email);
};

export const getUser = async (cookies: any, headers: any) => {
	const tokens = await getTokens(cookies, {
		...authConfig,
		headers: headers,
	});
	return tokens ? toUser(tokens) : null;
};
