import { createAuthClient } from "better-auth/react" // make sure to import from better-auth/react

export const { signIn, signUp, useSession, signOut } = createAuthClient({
 //you can pass client configuration here
 baseURL: "http://localhost:3000",
})
// export const { signIn, signUp, useSession } = authClient
