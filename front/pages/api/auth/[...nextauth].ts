import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.JWT_SECRET,

  callbacks: {
    async jwt({ token, account }: { token: any; account: any }) {
      if (account) {
        token = Object.assign({}, token, {
          access_token: account.access_token,
        });
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session) {
        session = Object.assign({}, session, {
          access_token: token.access_token,
        });
        console.log(session);
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
