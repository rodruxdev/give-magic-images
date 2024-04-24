import { Root } from "../routes/Root";

export const Landing = () => {
  return (
    <Root>
      <div className="w-full h-screen flex justify-center items-center flex-col">
        <p className="text-3xl text-center my-5 text-black">
          Save your images with:
        </p>
        <h1 className="text-5xl text-center text-primary font-bold">
          GiveMagic <span className="text-secondary">Images</span>
        </h1>
        <p className="text-lg my-2 text-black border-b-secondary border-solid border-b-2">
          Register now and load your first image with us.
        </p>
      </div>
    </Root>
  );
};
