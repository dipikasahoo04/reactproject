import userJson from './user.json'; // Ensure the path is correct

export const login = (email, password) => {
  console.log('Login attempt:', email, password);
  console.log('User data:', userJson);

  if (!Array.isArray(userJson)) {
    return {
      role: null,
      message: 'Error: User data is not in the expected format.',
    };
  }

  const user = userJson.find(user => user.email === email && user.password === password);

  if (user) {
    console.log('User found:', user);
    return {
      role: user.role,
      message: 'Login successful',
    };
  } else {
    console.log('User not found');
    return {
      role: null,
      message: 'Invalid email or password',
    };
  }
};