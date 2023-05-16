import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "419197897516-u4mu5kku9djgjti103hgpcm13e4nj3p1.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],

  pages: {
    signIn: "/auth/signin",
  },

  secret: process.env.SECRET,

  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
});
