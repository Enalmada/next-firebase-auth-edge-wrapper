// src/components/googleAuthHelpers.ts
import { loginWithCredential } from "../api";
import { getFirebaseAuth } from "../auth/firebase";
import {
  getGoogleProvider,
  loginWithProvider,
  loginWithProviderUsingRedirect
} from "./firebase";
async function handleLogin(credential, redirectAfterLogin) {
  await loginWithCredential(credential);
  redirectAfterLogin();
}
function createGoogleLoginHandlers(redirectAfterLogin, setHasLogged) {
  return {
    handleLoginWithGoogle: async () => {
      setHasLogged(false);
      const auth = getFirebaseAuth();
      const credential = await loginWithProvider(auth, getGoogleProvider(auth));
      await handleLogin(credential, redirectAfterLogin);
      setHasLogged(true);
    },
    handleLoginWithGoogleUsingRedirect: async () => {
      setHasLogged(false);
      const auth = getFirebaseAuth();
      await loginWithProviderUsingRedirect(auth, getGoogleProvider(auth));
      setHasLogged(true);
    }
  };
}
export {
  createGoogleLoginHandlers
};
