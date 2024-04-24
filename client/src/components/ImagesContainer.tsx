import photo from "../assets/familia6.jpeg";

export const ImagesContainer = ({
  openImage,
}: {
  openImage(image: string): void;
}) => {
  return (
    <div className="w-full p-5 grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-center">
      <button
        className="block w-full h-56 rounded-md border-2 border-secondary shadow-mg shadow-gray-900"
        onClick={() => {
          openImage("a");
        }}
      >
        <div className="h-4/5 rounded-t-md overflow-hidden">
          <img src={photo} alt="" className="object-cover" />
        </div>
        <div className="w-full h-1/5 bg-white rounded-b-md p-2 shadow-">
          <p className="text-black text-ellipsis overflow-hidden whitespace-nowrap">
            Image name
          </p>
        </div>
      </button>
    </div>
  );
};
