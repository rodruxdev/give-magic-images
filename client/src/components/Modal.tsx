import { ReactNode } from "react";

export const Modal = ({
  children,
  closeModal,
}: {
  children: ReactNode;
  closeModal(): void;
}) => {
  return (
    <div
      className="w-screen h-screen absolute top-0 left-0 z-10 cursor-pointer flex flex-col items-center justify-center"
      onClick={(e) => {
        closeModal();
        e.stopPropagation();
      }}
    >
      <div className="w-screen h-screen absolute top-0 left-0 z-10 bg-black opacity-50"></div>
      {children}
    </div>
  );
};
