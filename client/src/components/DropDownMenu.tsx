import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const authContext = useContext(AuthContext);

  return (
    <div className="relative inline-block p-2">
      <button
        className="relative z-10 text-lg flex gap-1 p-2 border-solid border-primary border-2 items-center text-black bg-white rounded focus:border-secondary focus:ring-opacity-40 focus:ring-secondary focus:ring focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mx-1">{authContext?.userEmail || "User"}</span>
        <svg
          className="w-5 h-5 mx-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
          <Link
            to="/gallery"
            className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform hover:opacity-90 hover:bg-accent hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            My Images
          </Link>
          <button
            onClick={authContext?.logout}
            className="block w-full text-left px-4 py-3 text-sm text-error capitalize transition-colors duration-200 transform hover:opacity-90 hover:bg-accent"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};
