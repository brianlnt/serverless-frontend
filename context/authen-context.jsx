"use client";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_5hZ4CSEvQ",
    client_id: "48foonrut8a0pfog35678mro47",
    redirect_uri: "http://localhost:3000/",
    response_type: "code",
    scope: "email openid phone",
  };

export default function ClientOnlyAuthProvider({ children }) {
  return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>;
}