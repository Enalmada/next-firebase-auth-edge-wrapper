export declare const serverConfig: {
    useSecureCookies: boolean;
    firebaseApiKey: string;
    serviceAccount: {
        projectId: string;
        clientEmail: string;
        privateKey: string;
    } | undefined;
};
export declare const authConfig: {
    apiKey: string;
    cookieName: string;
    cookieSignatureKeys: string[];
    cookieSerializeOptions: {
        path: string;
        httpOnly: boolean;
        secure: boolean;
        sameSite: "lax";
        maxAge: number;
    };
    serviceAccount: {
        projectId: string;
        clientEmail: string;
        privateKey: string;
    };
    enableMultipleCookies: boolean;
    enableCustomToken: boolean;
    experimental_enableTokenRefreshOnExpiredKidHeader: boolean;
    debug: boolean;
    tenantId: string | undefined;
};
