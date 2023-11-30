import { ReactNode } from "react";
import { ButtonContainer } from "./styles";
import { ButtonHTMLAttributes } from "react";
export type ButtonVariantTypes =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quintary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: ButtonVariantTypes;
  wFull?: boolean;
}

export function Button({
  children,
  variant,
  wFull = false,
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer {...rest} wFull={wFull} variant={variant}>
      {children}
    </ButtonContainer>
  );
}
