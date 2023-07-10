import styled, { css } from "styled-components";
import { ButtonVariantTypes } from ".";

interface ButtonProps {
  variant: ButtonVariantTypes;
  wFull: boolean;
}

function getButtonStyle(variant: ButtonVariantTypes) {
  return css`
    background: ${(props) => props.theme.color.btn[variant].bg};

    color: ${(props) => props.theme.color.btn[variant].text};

    &:hover {
      background: ${(props) => props.theme.color.btn[variant].hover};
    }
  `;
}

export const ButtonContainer = styled.button<ButtonProps>`
  border: 0;
  outline: 0;

  padding: 1rem 1.5rem;

  border-radius: 10rem;

  font-weight: bold;
  font-size: 0.75rem;

  cursor: pointer;

  ${(props) => props.variant && getButtonStyle(props.variant)}

  ${(props) =>
    props.wFull &&
    css`
      width: 100%;
    `}
`;
