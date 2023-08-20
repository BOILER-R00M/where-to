import { Auth } from 'aws-amplify';

// ...

export const handleSignIn = async (event) => {
  event.preventDefault(); // Prevent form submission

  try {
    const { username, password } = event.target.elements; // Update with your form input names

    // Use Auth.signIn to authenticate the user
    const user = await Auth.signIn(username.value, password.value);

    console.log('User signed in successfully', user);
    // You can navigate to the user's dashboard or show a success message
  } catch (error) {
    console.error('Sign-in error', error);
    // Handle errors, show error message to the user, etc.
  }
};

