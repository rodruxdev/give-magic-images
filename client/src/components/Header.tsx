import { Link, useMatch } from "react-router-dom";

export const Header = () => {
  const matchRoot = useMatch("/");
  return (
    <div className="w-full flex justify-between items-center px-8 py-4 absolute top-0">
      <Link to="/" className="text-3xl text-black font-bold">
        GiveMagic Images
      </Link>
      {matchRoot && (
        <Link
          to="/login"
          className="text-lg block p-2 rounded border-solid border-primary border-2"
        >
          Log In
        </Link>
      )}
    </div>
  );
};
