export const Header = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 py-4 absolute top-0">
      <a href="/" className="text-3xl text-black font-bold">
        GiveMagic Images
      </a>
      <a
        href="/login"
        className="text-lg block p-2 rounded border-solid border-primary border-2"
      >
        Log In
      </a>
    </div>
  );
};
