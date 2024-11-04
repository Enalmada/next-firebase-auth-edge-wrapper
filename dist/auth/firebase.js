// src/auth/firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import {
  connectAuthEmulator,
  getAuth,
  inMemoryPersistence,
  setPersistence
} from "firebase/auth";
import { getOrInitializeAppCheck } from "../app-check";
import { clientConfig } from "../config/client-config";
var getFirebaseApp = () => {
  if (getApps().length) {
    return getApp();
  }
  const app = initializeApp(clientConfig);
  if (process.env.NEXT_PUBLIC_FIREBASE_APP_CHECK_KEY) {
    getOrInitializeAppCheck(app);
  }
  return app;
};
function getFirebaseAuth() {
  const auth = getAuth(getFirebaseApp());
  setPersistence(auth, inMemoryPersistence);
  if (process.env.NEXT_PUBLIC_EMULATOR_HOST) {
    auth._canInitEmulator = true;
    connectAuthEmulator(auth, process.env.NEXT_PUBLIC_EMULATOR_HOST, {
      disableWarnings: true
    });
  }
  if (clientConfig.tenantId) {
    auth.tenantId = clientConfig.tenantId;
  }
  return auth;
}
export {
  getFirebaseAuth,
  getFirebaseApp
};
