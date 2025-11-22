import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

export default async function Profile() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        return <div>Not authenticated</div>
    }
    return (
        <div>
            <h1>Welcome {session.user.name}</h1>
        </div>
    )
}
