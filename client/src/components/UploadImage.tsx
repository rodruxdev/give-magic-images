export const UploadImage = ({ closeModal }: { closeModal(): void }) => {
  return (
    <section
      className="z-20 w-2/3 lg:w-1/2 relative grid grid-cols-1 cursor-default md:grid-cols-3 border border-accent bg-white rounded-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="rounded-l-xl p-4 bg-white flex flex-col justify-center items-center border-0 border-r border-accent">
        <label
          className="cursor-pointer w-36 hover:opacity-80 text-center shadow-md my-3 py-2 bg-white text-black rounded-md border border-accent font-bold text-md uppercase active:bg-white active:text-black focus:border-secondary focus:ring-opacity-40 focus:ring-secondary focus:ring focus:outline-none disabled:opacity-25 transition ease-in-out duration-150"
          htmlFor="image"
        >
          Select image
          <input
            id="image"
            className="text-sm cursor-pointer w-36 hidden"
            type="file"
          ></input>
        </label>
        <button className="cursor-pointer w-36 hover:opacity-80 items-center text-center shadow-md my-3 py-2 bg-primary text-white rounded-md font-bold text-md uppercase active:bg-white active:text-black focus:border-secondary focus:ring-opacity-40 focus:ring-secondary focus:ring focus:outline-none disabled:opacity-25 transition ease-in-out duration-150">
          Upload image
        </button>
        <button
          className="cursor-pointer w-36 hover:opacity-80 items-center text-center shadow-md my-3 py-2 bg-error text-white rounded-md font-bold text-md uppercase active:bg-white active:text-black focus:border-secondary focus:ring-opacity-40 focus:ring-secondary focus:ring focus:outline-none disabled:opacity-25 transition ease-in-out duration-150"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
      <div className="h-60 w-full p-2 col-start-2 col-end-4 grid place-items-center">
        <div className="relative order-first md:order-last w-full h-28 md:h-56 flex flex-col justify-center items-center border border-dashed border-accent rounded-lg">
          {/* <img src={photo} alt="" className="object-contain h-full" /> */}
          <span className="text-black opacity-90">
            <svg
              className="w-14 h-14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="0.7"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </span>
          <p>Drag and drop your image here</p>
        </div>
      </div>
    </section>
  );
};
