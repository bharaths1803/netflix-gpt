import { useRef, useState } from "react";
import Header from "./Header";
import { validateSigninData } from "../utils/validateData";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  const handleSubmit = () => {
    const message = validateSigninData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg"
          }
          alt="Bg image"
          className=""
        />
      </div>
      <form
        className="absolute my-36 p-12 w-full md:w-1/4 mx-auto bg-black text-white rounded-lg opacity-80 left-0 right-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-bold py-4 ">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            type="name"
            className="my-4 p-4 w-full bg-gray-700"
            placeholder="Name"
            ref={email}
          />
        )}
        <input
          type="email"
          className="my-4 p-4 w-full bg-gray-700"
          placeholder="Email"
          ref={email}
        />
        <input
          type="password"
          className="my-4 p-4 w-full bg-gray-700"
          placeholder="Password"
          ref={password}
        />
        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        <button
          className="my-6 p-4 w-full bg-red-700 rounded-lg"
          onClick={handleSubmit}
        >
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSigninForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
