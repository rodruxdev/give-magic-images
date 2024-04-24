import { useContext } from "react";
import { Link, useMatch } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { DropDownMenu } from "./DropDownMenu";

export const Header = () => {
  const matchRoot = useMatch("/");
  const authContext = useContext(AuthContext);

  return (
    <div className="w-full flex justify-between items-center px-8 py-4 absolute top-0 z-50">
      <Link to="/" className="text-3xl text-black font-bold">
        GiveMagic Images
      </Link>
      {authContext?.isAuth ? (
        <DropDownMenu></DropDownMenu>
      ) : (
        matchRoot && (
          <Link
            to="/login"
            className="text-lg block p-2 rounded border-solid border-primary border-2"
          >
            Log In
          </Link>
        )
      )}
    </div>
  );
};
