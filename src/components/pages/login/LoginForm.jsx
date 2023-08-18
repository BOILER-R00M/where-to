const LoginForm = () => {
  return (
    <div name="login_form_container" className="">
      <form className="">
        <h2
          style={{ fontSize: "8vw" }}
          className="text-center text-lightCoral font-semibold"
        >
          Login
        </h2>

        <div className="">
          <input
            className="border border-black rounded-md  "
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="">
          <input
            className="border border-black rounded-md "
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="">
          <input type="submit" value="Login" className="text-white bg-englishViolet rounded-md"/>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
