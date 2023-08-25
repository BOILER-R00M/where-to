import LoginForm from "./LoginForm";

const DesktopSignUp = () => {
  return (
    <div className="lg:order-2 lg:justify-center lg:items-center lg:bg-secondary lg:flex-grow">
      <h1 className="hidden text-[8vh] absolute top-10 left-0 font-semibold font-main text-primary lg:block">
        To
      </h1>
      <div className="hidden mx-auto lg:block lg:pb-12">
        <LoginForm />
      </div>
      <div>
        <span className="hidden lg:inline lg:mr-2 lg:text-primary">
          New to WhereTo?
        </span>
        <p
         
          className="hidden lg:text-base lg:inline-block lg:text-blue-700 lg:font-main lg:pb-12"
        >
          Create an account
        </p>
      </div>
    </div>
  );
};

export default DesktopSignUp;
