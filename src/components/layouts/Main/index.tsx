import { ReactNode } from "react";
import { MainContainer } from "./styles";
import { MotionProps } from "framer-motion";

interface MainProps extends MotionProps {
	children: ReactNode;
}

export function Main({ children, ...rest }: MainProps) {
	return <MainContainer {...rest}>{children}</MainContainer>;
}
