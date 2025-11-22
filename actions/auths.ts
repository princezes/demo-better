"use server"

import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const login = async (formData: FormData) => {
 const { email, password } = Object.fromEntries(formData.entries())
 console.log({ email, password })
 try {
  await auth.api.signInEmail({
   body: {
    email: "user@email.com",
    password: "password123",
   },
  })
 } catch (error) {
  console.error(error)
 }
 redirect("/dashboard")
}
export const register = async (formData: FormData) => {
 const { email, password, firstname, lastname } = Object.fromEntries(
  formData.entries()
 )
 console.log({ email, password, firstname, lastname })
 try {
  await auth.api.signUpEmail({
   body: {
    email: "user@email.com",
    password: "password123",
    name: "usertest",
   },
  })
 } catch (error) {
  console.error(error)
 }
 redirect("/dashboard")
}

export const socialLogin = async () => {
 try {
  await auth.api.signInSocial({
   body: {
    provider: "google",
    callbackURL: "/dashboard",
   },
  })
 } catch (error) {
  console.error(error)
 }
 //  redirect("/dashboard")
}
