import type { Tokens } from "next-firebase-auth-edge";
import type { User } from "../client/AuthContext";
export declare const toUser: ({ token, customToken, decodedToken }: Tokens) => User;
