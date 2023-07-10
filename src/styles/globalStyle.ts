import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Spartan', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.color.body.bg};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }
`;

export const ButtonContainer = styled.button`
  border-radius: 10rem;
  padding: 1rem 1.5rem;

  border: 0;
  outline: 0;
`;
