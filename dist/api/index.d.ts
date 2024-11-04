import type { UserCredential } from "firebase/auth";
export declare function login(token: string): Promise<void>;
export declare function loginWithCredential(credential: UserCredential): Promise<void>;
export declare function logout(): Promise<void>;
export declare function checkEmailVerification(): Promise<void>;
