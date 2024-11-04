export declare const logout: () => Promise<void>;
export declare const resetPassword: (email: string) => Promise<void>;
export declare const getUser: (cookies: any, headers: any) => Promise<import("./client/AuthContext").User | null>;
