import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Replace this with actual DB logic later
        const validUsername = 'admin';
        const validPassword = 'password';

        if (
          credentials?.username === validUsername &&
          credentials?.password === validPassword
        ) {
          return {
            id: '1',
            name: 'Admin',
            email: 'admin@example.com',
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
