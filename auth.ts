
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { prisma } from "./utils/db";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { z } from "zod";

const getUser = async ({ email, password }: { email: string, password: string }) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
                password
            }
        })
        console.log('user found ? ', user);
        
        if(!user){
            throw new Error("Invalid credentials.")
        }
        return { user }
    } catch (error) {
        console.log(error);
        throw new Error("Invalid credentials.")
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages : {
        signIn : "/"
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
          const isLoggedIn = !!auth?.user;
          const isOnDashboard = nextUrl.pathname.startsWith('/contrats');
          if (isOnDashboard) {
            if (isLoggedIn) return true;
            return false; // Redirect unauthenticated users to login page
          }else if (isLoggedIn) {
            return Response.redirect(new URL('/contrats', nextUrl));
          }
          return true;
        },
    },
    providers: [
        Credentials({
            authorize: async (credentials) => {
                let user = null
                const parsedCredentials = z.object({
                    email : z.string().email() ,
                    password : z.string().min(6)
                }).safeParse(credentials)
                if(parsedCredentials.success){
                    const {email , password} = parsedCredentials.data
                    const { user } = await getUser({email, password})
                    return user;
                }
                return null;
            }
        }),
    ],
})
