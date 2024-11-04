'use client';

// src/client/AuthContext.tsx
import { createContext, useContext } from "react";

var AuthContext = createContext({
  user: null
});

// src/client/AuthProvider.tsx
import { jsx } from "react/jsx-runtime";

var AuthProvider = ({
  user,
  children
}) => {
  return /* @__PURE__ */ jsx(AuthContext.Provider, {
    value: {
      user
    },
    children
  });
};
export {
  AuthProvider
};
