import { Reducer, useReducer } from "react";

type modalGalleryState = {
  open: boolean;
  type?: "upload" | "image";
  image?: Image;
};

type modalGalleryAction = {
  type: "upload" | "close" | "image";
  image?: Image;
};

const modalGalleryReducer: Reducer<modalGalleryState, modalGalleryAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "upload": {
      return {
        open: true,
        type: "upload",
        image: undefined,
      };
    }
    case "image": {
      return {
        open: true,
        type: "image",
        image: action.image,
      };
    }
    case "close": {
      return {
        open: false,
        type: undefined,
        image: undefined,
      };
    }
  }
};

export const useModalGallery = () => {
  const [state, dispatch] = useReducer(modalGalleryReducer, {
    open: false,
    type: undefined,
    image: undefined,
  });

  const closeModal = () => {
    dispatch({ type: "close" });
  };

  const openUpload = () => {
    dispatch({ type: "upload" });
  };

  const openImage = (image: Image) => {
    dispatch({ type: "image", image: image });
  };

  return { state, closeModal, openUpload, openImage };
};
