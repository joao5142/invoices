import { Card } from "@/styles/globalStyle";
import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: 45.625rem;
  height: 100%;
  margin: 0px auto;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > :nth-child(1) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;

    strong {
      font-size: 2rem;
      color: ${(props) => props.theme.color.text.heading};
    }
    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme.color.text.bodyA};
    }
  }

  & > :nth-child(2) {
    margin-right: 2rem;
  }

  @media (max-width: 450px) {
    & {
      flex-wrap: wrap;
      gap: 1rem;
    }
    & > button {
      width: 100%;
      padding: 1rem;
    }
  }
`;
export const ButtonNewInvoice = styled.button`
  border: 0;
  border-radius: 10rem;
  outline: 0;

  font-size: 0.75rem;
  font-weight: bold;
  color: white;

  padding: 0.5rem 0.6rem;
  padding-right: 0.8rem;

  cursor: pointer;

  background-color: ${(props) => props.theme.color.main};

  &:hover {
    background-color: ${(props) => props.theme.color.secondary};
    transition: 0.3s ease;
  }
`;

export const InvoiceItemsContainer = styled.section`
  margin-top: 4rem;
`;
export const InvoiceItem = styled(Card)`
  width: 100%;

  display: grid;
  align-items: center;
  grid-template-columns: 0.4fr 1.5fr 2fr 1.5fr 1.5fr 0.625rem;

  cursor: pointer;

  border: 1px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme.color.secondary};
    transition: all 0.2s ease-out;
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.color.text.bodyA};
  }
  & > strong,
  span strong {
    color: ${(props) => props.theme.color.text.heading};
  }
  & > :nth-child(1) {
    font-size: 0.8rem;
    font-weight: bold;
  }
  & > :nth-child(6) {
    display: flex;
    justify-content: end;
  }
`;
