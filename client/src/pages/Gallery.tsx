import { UploadImage } from "../components/UploadImage";
import { ImagesContainer } from "../components/ImagesContainer";
import { Modal } from "../components/Modal";
import { useModalGallery } from "../hooks/useModalGallery";
import { ImageVisor } from "../components/ImageVisor";
import { useCallback, useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getImagesService } from "../services/ImagesService";
import { Navigate } from "react-router-dom";

export const Gallery = () => {
  const authContext = useContext(AuthContext);
  const [images, setImages] = useState<Image[]>([]);
  const { state, closeModal, openUpload, openImage } = useModalGallery();

  const getImages = useCallback(async () => {
    if (authContext?.token) {
      const newImages = await getImagesService(authContext?.token);
      setImages(newImages);
    }
  }, [authContext?.token]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  if (!authContext?.isAuth) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="relative w-full h-min-screen items-center pt-20">
      <div className="w-full p-4">
        <button
          className="p-2 flex items-center rounded border-solid border-primary border-2 text-2xl text-black"
          onClick={openUpload}
        >
          <span className="mx-2">
            <svg
              className="fill-black w-5 h-5"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 45.402 45.402"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"
                />
              </g>
            </svg>
          </span>
          Add image
        </button>
      </div>
      <ImagesContainer openImage={openImage} images={images}></ImagesContainer>
      {state.open && (
        <Modal closeModal={closeModal}>
          {state.type === "image" && state.image ? (
            <ImageVisor
              closeModal={closeModal}
              image={state.image}
            ></ImageVisor>
          ) : (
            <UploadImage
              closeModal={closeModal}
              getImages={getImages}
            ></UploadImage>
          )}
        </Modal>
      )}
    </div>
  );
};
