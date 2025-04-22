"use client";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
    authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URL,
    response_type: "code",
    scope: process.env.NEXT_PUBLIC_SCOPES,
};

export default function ClientOnlyAuthProvider({ children }) {
    return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>;
}
