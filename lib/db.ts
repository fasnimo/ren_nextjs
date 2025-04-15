export async function getUserByUsername(username: string) {
    if (username === 'admin') {
      return {
        id: '1',
        name: 'Admin',
        email: 'admin@example.com',
        username: 'admin',
        password: 'password', // plain text baby
      };
    }
  
    return null;
}
  