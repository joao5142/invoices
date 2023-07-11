import { motion } from "framer-motion";
import styled from "styled-components";

export const MainContainer = styled(motion.main)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 4.5rem 3rem;

  margin-left: 6.5rem;
`;

export const ButtonNewInvoiceIcon = styled.div`
  display: inline-flex;
  margin-right: 0.5rem;
  padding: 0.625rem;
  background: white;
  border-radius: 50%;
`;
