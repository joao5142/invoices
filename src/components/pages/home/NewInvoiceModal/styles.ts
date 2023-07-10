import { motion } from "framer-motion";
import { styled } from "styled-components";

export const NewInvoiceModalContainer = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const NewInvoiceModalContent = styled(motion.div)`
  z-index: 1;

  height: 100vh;

  background: ${(props) => props.theme.color.form.bg};

  max-width: 750px;
  width: 100%;

  border-radius: 0px 20px 20px 0px;

  padding-left: 6.5rem;
`;

export const Content = styled.div`
  padding: 3.5rem 2rem 0px 3.5rem;

  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  h2 {
    color: ${(props) => props.theme.color.text.heading};
    margin-bottom: 3rem;
  }

  & > :nth-child(3) {
    padding: 2rem 0rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  & > :nth-child(1) {
    margin-right: auto;
  }
`;
