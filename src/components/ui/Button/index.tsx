import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

export type ButtonVariantTypes = "primary" | "secondary" | "tertiary" | "quaternary" | "quintary";

interface ButtonProps {
	children: ReactNode;
	variant: ButtonVariantTypes;
	wFull?: boolean;
}

export function Button({ children, variant, wFull = false }: ButtonProps) {
	return (
		<ButtonContainer wFull={wFull} variant={variant}>
			{children}
		</ButtonContainer>
	);
}
