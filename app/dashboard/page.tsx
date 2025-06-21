import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Page() {
    return <div>
        <h1 className="text-4xl font-bold">Dashboard Page</h1>
        <Button asChild>
            <Link href={"/"}>Retour</Link>
        </Button>
    </div>;
}
