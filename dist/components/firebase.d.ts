import type { Auth, AuthError, AuthProvider, UserCredential } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
export declare const isCredentialAlreadyInUseError: (e: AuthError) => boolean;
export declare const logout: (auth: Auth) => Promise<void>;
export declare const getGoogleProvider: (auth: Auth) => GoogleAuthProvider;
export declare const loginWithProvider: (auth: Auth, provider: AuthProvider) => Promise<UserCredential>;
export declare const loginWithProviderUsingRedirect: (auth: Auth, provider: AuthProvider) => Promise<void>;
