import { NextRequest, NextResponse } from "next/server"

import { getSessionCookie } from "better-auth/cookies"
// import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
 const sessionCookie = getSessionCookie(request)
 //  const session = null
 if (!sessionCookie) {
  return NextResponse.redirect(new URL("/auth/login", request.url))
 }

 return NextResponse.next()
}

export const config = {
 matcher: [], // Apply middleware to specific routes
}
