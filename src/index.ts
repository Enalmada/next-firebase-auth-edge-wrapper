import { getFirebaseAuth } from "next-firebase-auth-edge/lib/auth";
import { authMiddleware } from "next-firebase-auth-edge/lib/next/middleware";
import { getTokens } from "next-firebase-auth-edge/lib/next/tokens";
import { useAuth } from "./client/AuthContext";
import { submitPasswordForm } from "./components/authHelpers";
import { createGoogleLoginHandlers } from "./components/googleAuthHelpers";
import { clientConfig } from "./config/client-config";
import { authConfig, serverConfig } from "./config/server-config";
import { getUser, logout, resetPassword } from "./moved";

export {
	useAuth,
	logout,
	resetPassword,
	createGoogleLoginHandlers,
	submitPasswordForm,
	getUser,
	clientConfig,
	serverConfig,
	authConfig,
	authMiddleware,
	getTokens,
	getFirebaseAuth,
};
