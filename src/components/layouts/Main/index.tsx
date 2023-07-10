import { ReactNode } from "react";
import { MainContainer } from "./styles";

interface MainProps {
  children: ReactNode;
}
export function Main({ children }: MainProps) {
  return <MainContainer>{children}</MainContainer>;
}
