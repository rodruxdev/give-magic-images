import { ReactNode } from "react";
import { Header } from "../components/Header";

export const Root = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};
