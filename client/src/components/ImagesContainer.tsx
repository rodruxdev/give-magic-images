import { API_URL } from "../utils/constants";

export const ImagesContainer = ({
  openImage,
  images,
}: {
  openImage(image: Image): void;
  images: Image[];
}) => {
  if (images.length === 0) {
    return (
      <div className="w-full p-5 grid place-items-center">
        <p className="text-center text-2xl text-secondary">
          Oops! You don't have any image for the moment
        </p>
        <p className="text-center text-4xl text-black">
          Upload your first image!
        </p>
      </div>
    );
  }

  return (
    <div className="w-full p-5 grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-center">
      {images?.map((image, index) => (
        <button
          key={image.imageId}
          className={`block w-full h-56 rounded-md border-2 ${
            index % 2 === 0 ? "border-secondary" : "border-primary"
          } shadow-mg shadow-gray-900`}
          onClick={() => {
            openImage(image);
          }}
        >
          <div className="h-4/5 rounded-t-md overflow-hidden flex justify-center items-center">
            <img
              src={`${API_URL}${image.url}`}
              alt=""
              className="object-cover h-full w-full flex-shrink-0"
            />
          </div>
          <div className="w-full h-1/5 bg-white rounded-b-md p-2 shadow-">
            <p className="text-black text-ellipsis overflow-hidden whitespace-nowrap">
              {image.name}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};
