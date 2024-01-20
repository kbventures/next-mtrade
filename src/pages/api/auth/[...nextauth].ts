import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { User, PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions } from "next-auth";
// import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";
// import { Session } from "next-auth/core/types";
import { Session } from "next-auth/core/types";
// import prisma from "../../../lib/prisma"; // Import the global prisma object from the new file

const prisma = new PrismaClient();

const loginUserSchema = z.object({
    username: z.string().regex(/^[a-z0-9_-]{3,15}$/g, "Invalid username"),
    password: z.string().min(5, "Password should be minimum 5 characters"),
});
// const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                username: { type: "text", placeholder: "User Name" },
                password: { type: "password", placeholder: "Pa$$w0rd" },
            },
            async authorize(credentials) {
                const { username, password } =
                    loginUserSchema.parse(credentials);
                const user = await prisma.user.findUnique({
                    where: { username },
                });
                if (!user) return null;

                const isPasswordValid = await bcrypt.compare(
                    password,
                    user.password
                );

                if (!isPasswordValid) return null;

                return user;
            },
        }),
    ],
    callbacks: {
        session({ session, token }) {
            // console.log("account ...nextauth", session);
            // console.log("token ...nextauth", token);
            // Create a new session object with the necessary modifications
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    username: token.username,
                },
            } as Session;
        },
        jwt({ token, account, user }) {
            // console.log("account ...nexta", account);
            const modifiedToken = {
                ...token,
            };

            if (account) {
                modifiedToken.accessToken = account.access_token;
                modifiedToken.id = user.id;
                modifiedToken.username = (user as User).username;
            }
            return modifiedToken;
        },
    },
    // callbacks: {
    //     session({ session, token }) {
    //         // eslint-disable-next-line sonarjs/prefer-immediate-return
    //         const modidfiedSession: Session = {
    //             ...session,
    //             user: {
    //                 ...session.user,
    //                 id: token.id as string,
    //                 username: token.username as string,
    //                 haha: "Dmitry",
    //             },
    //         };
    //         // modifiedSession.user.id = token.id;
    //         // modifiedSession.user.username = token.username;
    //         return modidfiedSession;
    //     },
    //     jwt({ token, account, user }) {
    //         if (account) {
    //             token.accessToken = account.access_token;
    //             token.id = user.id;
    //             token.username = (user as User).username;
    //             console.log({ user });
    //         }
    //         return token;
    //     },
    // },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
