'use client';

// src/client/AuthContext.tsx
import { createContext, useContext } from "react";

var AuthContext = createContext({
  user: null
});
var useAuth = () => useContext(AuthContext);
export {
  useAuth,
  AuthContext
};
