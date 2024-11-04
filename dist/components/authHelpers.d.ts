import type { Dispatch, SetStateAction } from "react";
type SetLoggedFunction = Dispatch<SetStateAction<boolean>>;
type SetErrorFunction<T> = (field: keyof T | "root", error: {
    type: string;
    message: string;
}) => void;
type FormData = {
    email: string;
    password: string;
};
declare function submitPasswordForm({ email, password }: FormData, isSignIn: boolean, setHasLogged: SetLoggedFunction, setError: SetErrorFunction<FormData>, redirectAfterLogin: () => void): Promise<void>;
export { submitPasswordForm };
