"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    // DropdownMenuRadioGroup,
    // DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { signOut, useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function DropdownMenuRadioGroupDemo() {
    const {
        data: session,
        // isPending, 
        // error, 
        // refetch 
    } = useSession()
    const router = useRouter()

    async function logout() {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth/login"); // redirect to login page
                },
            },
        });
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {session && (
                    <Button variant="outline">
                        <Avatar>
                            <AvatarImage src={session.user?.image!} alt="toto" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {
                            session.user.email
                        }
                    </Button>
                )}

            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Button asChild>
                        <Link href="/auth/profile">Account</Link>
                    </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Button variant="destructive" onClick={logout} >
                        Logout
                    </Button>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}
