
import { DropdownMenuRadioGroupDemo } from "@/components/logout-button";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

export default async function Page() {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        redirect("/auth/login")
    }
    return <div>
        <h1 className="text-4xl font-bold">Dashboard Page</h1>
        <Button asChild>
            <Link href={"/"}>Retour</Link>
        </Button>

        <div className="min-h-screen flex items-center justify-center">
            <DropdownMenuRadioGroupDemo />
        </div>
    </div>;
}
