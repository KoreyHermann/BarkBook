import Auth from '../utils/auth';

export const createUser = async (userFormData) => {
  try {
    // Send a request to create a new user
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userFormData),
    });

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const { token, user } = await response.json();

    // Save the token and log in the user
    Auth.login(token);

    return { token, user };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
