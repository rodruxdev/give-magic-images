import photo from "../assets/familia6.jpeg";

export const ImageVisor = ({ closeModal }: { closeModal(): void }) => {
  return (
    <section
      className="z-20 w-2/3 lg:w-1/2 relative grid grid-cols-1 cursor-default md:grid-cols-3 border border-accent bg-white rounded-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="rounded-l-xl p-4 bg-white flex flex-col justify-end items-center border-0 border-r border-accent">
        <p className="text-black w-full">Image name</p>
        <button
          className="cursor-pointer w-36 hover:opacity-80 items-center text-center shadow-md my-3 py-2 bg-error text-white rounded-md font-bold text-md uppercase active:bg-white active:text-black focus:border-secondary focus:ring-opacity-40 focus:ring-secondary focus:ring focus:outline-none disabled:opacity-25 transition ease-in-out duration-150"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
      <div className="w-full p-2 col-start-2 col-end-4 grid place-items-center">
        <div className="relative order-first md:order-last w-full h-28 md:h-auto md:max-h-[610px] flex flex-col justify-center items-center border border-dashed border-accent rounded-lg">
          <img
            src={photo}
            alt=""
            className="object-contain h-full  rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
