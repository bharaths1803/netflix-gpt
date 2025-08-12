import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gpt = useSelector((store) => store.gpt);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleToggleGPTView = () => {
    dispatch(toggleGptView());
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex flex-col md:flex-row justify-between">
      <img alt="Logo" src={NETFLIX_LOGO} className="w-44 mx-auto md:mx-0" />
      {user && (
        <div className="flex p-2">
          <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleChangeLanguage}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="bg-purple-800 text-white rounded-lg px-4 py-2 my-2 mx-4"
            onClick={handleToggleGPTView}
          >
            {gpt.gptView ? "Homepage" : "Gpt Search"}
          </button>
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            className="hidden md:block w-12 h-12"
          />
          <button className="text-white font-bold" onClick={handleSignOut}>
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
