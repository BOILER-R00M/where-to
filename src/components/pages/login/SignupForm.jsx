import { Link } from "react-router-dom";
import Button from "../../utility/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import UserPool from "../../../AWS/auth/UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

// TODO:
// [ ] need callback logic to render a form where we can submit verification code
// [ ] implement sign out link
// [ ] implement conditional rendering of confirmation page based on http response status
// [ ] redirect to login page or authenticate after confirmation

const SignUpForm = () => {
    const [userOjb, setUserOjb] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        email: "",
    });

    const [isRegistrationPending, setIsRegistrationPending] = useState(false);
    const [confirmationCode, setConfirmationCode] = useState("");
    const [cognitoUser, setCognitoUser] = useState(null);

    const attributes = [
        { Name: "email", Value: userOjb.email },
        { Name: "name", Value: `${userOjb.lastName}, ${userOjb.firstName}` },
        // Add other attributes as needed
    ];
    // const handleConfirmationCode = (e) => {
    //     setConfirmationCode((prev) => {
    //         return { ...prev, [e.target.name]: e.target.value };
    //     });
    // };

    const handleConfirmationCode = (e) => {
        setConfirmationCode(e.target.value);
    };

    const handleUserObj = (e) => {
        setUserOjb((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    // const submitUserDetails = (e) => {
    // 	e.preventDefault();
    // 	UserPool.signUp(
    // 		userOjb.username,
    // 		userOjb.password,
    // 		attributes,
    // 		null,
    // 		(err, data) => {
    // 			if (err) {
    // 				console.log(err);
    // 			}
    // 			console.log(data);
    // 			setIsRegistrationPending(true);
    // 		}
    // 	);
    // };

    const submitUserDetails = async (e) => {
        e.preventDefault();
        return new Promise((resolve, reject) => {
            UserPool.signUp(
                userOjb.username,
                userOjb.password,
                attributes,
                null,
                (err, data) => {
                    if (err) {
                        console.error(
                            "Error during sign-up:",
                            JSON.stringify(err)
                        );
                        reject(err);
                        return;
                    }
                    console.log("Sign-up data:", data);
                    setCognitoUser(
                        new CognitoUser({
                            Username: userOjb.username,
                            Pool: UserPool,
                        })
                    );
                    setIsRegistrationPending(true);
                    resolve(data);
                }
            );
        }).catch((err) => {
            // Handle error as needed
            console.error("Promise-based error handling:", err);
        });
    };

    const submitConfirmationCode = (e) => {
        e.preventDefault();
        cognitoUser.confirmRegistration(
            confirmationCode,
            true,
            function (err, result) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("Confirmation successful:", result);
            }
        );
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
            className="max-w-[600px] mx-auto w-81 pb-[5vh] samsungS8:pb-60 iphoneXr:pb-60 sm:pb-10  md:pb-64 lg:w-[25vw] lg:pb-0"
            initial="hidden"
            animate="visible"
            variants={signUpVariant}
        >
            {isRegistrationPending ? (
                <form className="mx-auto" onSubmit={submitConfirmationCode}>
                    <h2 className="text-[4vh] py-3 font-semibold text-center text-secondary font-main">
                        Enter Confirmation Code
                    </h2>
                    <div className="py-3">
                        <input
                            className="w-full p-2 text-lg font-main rounded text-tertiary"
                            type="text"
                            placeholder="Confirmation Code "
                            name="confirmationCode"
                            value={confirmationCode}
                            onChange={handleConfirmationCode}
                            required
                        />
                    </div>
                    <div className="py-3">
                        <Button>Submit</Button>
                    </div>
                </form>
            ) : (
                <Registration
                    onSubmit={submitUserDetails}
                    userOjb={userOjb}
                    handleUserObj={handleUserObj}
                />
            )}

            <Link
                className="block text-base text-center underline text-secondary font-main"
                to="/login"
            >
                Already have an account? Login
            </Link>
        </motion.div>
    );
};

export default SignUpForm;

function Registration({ onSubmit, userOjb, handleUserObj }) {
    return (
        <form className="mx-auto" onSubmit={onSubmit}>
            <h2 className="text-[2.25rem]  py-2 font-semibold text-center text-primary font-main">
                Sign Up
            </h2>

            <div className="py-3">
                <input
                    className="w-full p-2 text-lg font-main rounded text-tertiary"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={userOjb.firstName}
                    onChange={handleUserObj}
                    required
                />
            </div>

            <div className="py-3">
                <input
                    className="w-full p-2 text-lg font-main rounded text-tertiary"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={userOjb.lastName}
                    onChange={handleUserObj}
                    required
                />
            </div>

            <div className="py-3">
                <input
                    className="w-full p-2 text-lg font-main rounded text-tertiary"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={userOjb.username}
                    onChange={handleUserObj}
                    required
                />
            </div>

            <div className="py-3">
                <input
                    className="w-full p-2 text-lg font-main rounded text-tertiary"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={userOjb.email}
                    onChange={handleUserObj}
                    required
                />
            </div>

            <div className="py-3">
                <input
                    className="w-full p-2 text-lg font-main rounded text-tertiary"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={userOjb.password}
                    onChange={handleUserObj}
                    required
                />
            </div>
            <div className="py-3">
                <input
                    className="w-full p-2 text-lg font-main rounded text-tertiary"
                    type="password"
                    placeholder="Confirm Password"
                    required
                />
            </div>

            <div className="py-3">
                <Button>Sign Up</Button>
            </div>
        </form>
    );
}
