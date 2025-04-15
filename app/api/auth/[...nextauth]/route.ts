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
        console.log('🚪 Received login attempt:', credentials);

        if (
          credentials?.username === 'admin' &&
          credentials?.password === 'password'
        ) {
          console.log('✅ Logged in as admin');
          return {
            id: '1',
            name: 'Admin',
            email: 'admin@example.com',
          };
        }

        console.log('❌ Invalid credentials');
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
