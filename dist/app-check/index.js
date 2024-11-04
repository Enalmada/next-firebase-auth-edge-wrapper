// src/app-check/index.ts
import {
  ReCaptchaEnterpriseProvider,
  initializeAppCheck
} from "@firebase/app-check";
import { getFirebaseApp } from "../auth/firebase";
var appCheck = null;
function getOrInitializeAppCheck(app) {
  if (appCheck) {
    return appCheck;
  }
  if (false) {
  }
  return appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider(process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_KEY),
    isTokenAutoRefreshEnabled: true
  });
}
function getAppCheck() {
  const app = getFirebaseApp();
  return getOrInitializeAppCheck(app);
}
export {
  getOrInitializeAppCheck,
  getAppCheck
};
