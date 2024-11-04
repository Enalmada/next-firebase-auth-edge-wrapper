import type { UserInfo } from "firebase/auth";
import type { Claims } from "next-firebase-auth-edge/lib/auth/claims";
export interface User extends UserInfo {
    idToken: string;
    customToken?: string;
    emailVerified: boolean;
    customClaims: Claims;
}
export interface AuthContextValue {
    user: User | null;
}
export declare const AuthContext: import("react").Context<AuthContextValue>;
export declare const useAuth: () => AuthContextValue;
