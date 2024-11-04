import type * as React from "react";
import { type User } from "./AuthContext";
export interface AuthProviderProps {
    user: User | null;
    children: React.ReactNode;
}
export declare const AuthProvider: React.FunctionComponent<AuthProviderProps>;
