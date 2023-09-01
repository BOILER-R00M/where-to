import Button from "../../utility/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import UserPool from "../../../AWS/auth/UserPool";
import { createUser } from "../../../AWS/auth/dynamodb";

// TODO:
// [ ] need callback logic to render a form where we can submit verification code

const SignUpForm = () => {
  const [userObj, setUserObj] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
  });
  const [cognitoUserId, setCognitoUserId] = useState(null);
  const attributes = [
    { Name: "email", Value: userObj.email },
    { Name: "name", Value: `${userObj.lastName}, ${userObj.firstName}` },
    
  ];

  const handleUserObj = (e) => {
    setUserObj((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const cognitoUserSignup = async () => {
    try {
      const data = await new Promise((resolve, reject) => {
        UserPool.signUp(
          userObj.username,
          userObj.password,
          attributes,
          null,
          (err, data) => {
            if (err) {
              reject(err);
            } else {
              resolve(data);
            }
          }
        );
      });
      setCognitoUserId(data.userSub);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  

  const handleSignUp = async () => {
    
    if (!userObj) {
      return; 
    }
    
    try {
      await createUser(userObj,cognitoUserId);
    } catch (err) {
      console.error('Error:', err); 
    }
  };
  

  const handleNewUserSignup = async (e) => {
    e.preventDefault();
    try {
      cognitoUserSignup();
      console.log(`Cognito userId: ${cognitoUserId}`)
      await handleSignUp(userObj, cognitoUserId);

    } catch (error) {
      console.error(error);
    }
  };

  const signUpVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      name="signup_form_container"
      className="max-w-[600px] mx-auto w-80 pb-[5vh] sm:pb-10 md:pb-64 lg:pb-0"
      initial="hidden"
      animate="visible"
      variants={signUpVariant}
    >
      <form className="mx-auto" onSubmit={(e)=>handleNewUserSignup(e)} name="form">
        <h2 className="text-[4vh] py-3 font-semibold text-center text-secondary font-main lg:text-primary">
          Sign Up
        </h2>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={userObj.firstName}
            onChange={handleUserObj}
            required
          />
        </div>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={userObj.lastName}
            onChange={handleUserObj}
            required
          />
        </div>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
            type="text"
            placeholder="Username"
            name="username"
            value={userObj.username}
            onChange={handleUserObj}
            required
          />
        </div>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md font-main text-tertiary"
            type="email"
            placeholder="Email"
            name="email"
            value={userObj.email}
            onChange={handleUserObj}
            required
          />
        </div>

        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md text-tertiary font-main"
            type="password"
            placeholder="Password"
            name="password"
            value={userObj.password}
            onChange={handleUserObj}
            required
          />
        </div>
        <div className="py-3">
          <input
            className="w-full px-3 py-2 text-lg border border-black rounded-md text-tertiary font-main"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </div>

        <div className="py-3">
          <Button>Sign Up</Button>
        </div>
      </form>
    </motion.div>
  );
};

export default SignUpForm;
