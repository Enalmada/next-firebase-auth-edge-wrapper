import type { Dispatch, SetStateAction } from "react";
export declare function createGoogleLoginHandlers(redirectAfterLogin: () => void, setHasLogged: Dispatch<SetStateAction<boolean>>): {
    handleLoginWithGoogle: () => Promise<void>;
    handleLoginWithGoogleUsingRedirect: () => Promise<void>;
};
