// src/components/firebase.ts
import {
  GoogleAuthProvider,
  browserPopupRedirectResolver,
  useDeviceLanguage as setDeviceLanguage,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from "firebase/auth";
var CREDENTIAL_ALREADY_IN_USE_ERROR = "auth/credential-already-in-use";
var isCredentialAlreadyInUseError = (e) => e?.code === CREDENTIAL_ALREADY_IN_USE_ERROR;
var logout = async (auth) => {
  return signOut(auth);
};
var getGoogleProvider = (auth) => {
  const provider = new GoogleAuthProvider;
  provider.addScope("profile");
  provider.addScope("email");
  setDeviceLanguage(auth);
  provider.setCustomParameters({
    display: "popup"
  });
  return provider;
};
var loginWithProvider = async (auth, provider) => {
  const result = await signInWithPopup(auth, provider, browserPopupRedirectResolver);
  return result;
};
var loginWithProviderUsingRedirect = async (auth, provider) => {
  await signInWithRedirect(auth, provider);
};
export {
  logout,
  loginWithProviderUsingRedirect,
  loginWithProvider,
  isCredentialAlreadyInUseError,
  getGoogleProvider
};
