import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled(motion.main)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 4.5rem 3rem;

  margin-left: 6.5rem;

  @media (max-width: 700px) {
    & {
      margin-top: 6rem;
    }
    & {
      margin-left: 0;
    }
  }

  @media (max-width: 500px) {
    &:not([data-view="invoice-item"]) {
      padding: 2.5rem 3rem;
    }
  }
  @media (max-width: 450px) {
    & {
      padding: 2.5rem 0.6rem;
    }
  }
`;

export const ButtonNewInvoiceIcon = styled.div`
  display: inline-flex;
  margin-right: 0.5rem;
  padding: 0.625rem;
  background: white;
  border-radius: 50%;
`;
