import { Auth } from 'aws-amplify';
import useUser from '../../context/UserContext'
import React, { useContext } from 'react';
import { LOGIN_PATH } from '../../utilities/helpers/variables'
import { navTo } from '../../utilities/helpers/functions';

const { setAuthUser } = useUser();

export const handleSignUp = async (event) => {


  event.preventDefault();

  try {
    const { username, password, email } = event.target.elements; // Update with your form input names

    // Use Auth.signUp to create a new user
    const user = await Auth.signUp({
      username: username.value,
      password: password.value,
      attributes: {
        email: email.value,
        // Add any additional attributes here
      },
    });
    setAuthUser(user)
    navTo(LOGIN_PATH)

    console.log('User created successfully', user);
    // You can navigate to a success page or show a success message
  } catch (error) {
    console.error('Error creating user', error);
    // Handle errors, show error message to the user, etc.
  }
};

