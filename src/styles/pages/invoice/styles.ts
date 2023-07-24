import styled from "styled-components";

import { Card as CardContainer } from "@/styles/globalStyle";

export const Content = styled.div`
  max-width: 630px;
  width: 100%;
`;

export const HeaderNavigationBack = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  cursor: pointer;

  margin-bottom: 1.8rem;

  span {
    display: inline-block;
    margin-top: 3px;

    font-size: 0.75rem;
    color: ${(props) => props.theme.color.text.link};

    &:hover {
      color: ${(props) => props.theme.color.text.linkHover};
    }
  }
`;

export const Card = styled(CardContainer)`
  box-shadow: rgba(72, 84, 159, 0.1) 0px 10px 10px -10px;
`;

export const InvoiceHeaderConfig = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > :nth-child(1) {
    span {
      font-size: 0.75rem;
      color: ${(props) => props.theme.color.text.bodyA};
    }
  }
  & > * {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 444px) {
    & {
      flex-wrap: wrap;
      gap: 1rem;

      > * {
        flex: 1;
      }

      > :nth-child(1) {
        display: flex;
        justify-content: space-between;
      }

      > :nth-child(2) {
        display: flex;
        justify-content: space-between;

        * {
          flex: 1;
        }
      }
    }
  }
`;

export const InvoiceBody = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  span {
    color: ${(props) => props.theme.color.text.bodyA};
    font-size: 0.75rem;
  }

  strong {
    color: ${(props) => props.theme.color.text.heading};
  }

  @media (max-width: 690px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const InvoiceName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  grid-column: 1/3;

  span:nth-child(1) {
    font-size: 1rem;

    font-weight: bold;

    strong {
      color: ${(props) => props.theme.color.text.heading};
    }
  }
  span:nth-child(2) {
    font-weight: 400;
  }
`;

export const InvoiceAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  span {
    text-align: right;
    font-size: 0.75rem;
    color: ${(props) => props.theme.color.text.bodyA};
  }

  @media (max-width: 690px) {
    span {
      text-align: left;
    }
  }
`;

export const InvoiceColumn = styled.div`
  display: flex;
  flex-direction: column;

  & > span:nth-of-type(1) {
    display: block;
    margin-bottom: 0.6rem;
  }
`;

export const InvoiceColumnBillTo = styled(InvoiceColumn)`
  div {
    margin-top: 0.8rem;

    display: flex;
    flex-direction: column;
    gap: 7px;
  }
`;

export const InvoiceColumnDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > * {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 7px;
  }
`;

export const InvoiceColumnEmail = styled(InvoiceColumn)`
  a {
    color: ${(props) => props.theme.color.text.heading};

    text-decoration: none;

    cursor: pointer;
  }

  @media (max-width: 444px) {
    & {
      grid-column: 1/-1;
    }
  }
`;

export const InvoiceBodyFooterContent = styled.div`
  padding: 1rem 1.5rem;
`;

const ItemDescriptionRow = styled.div`
  display: grid;

  grid-template-columns: 1fr 2rem 6rem 1fr;

  & > :nth-child(2) {
    text-align: center;
  }

  & > :nth-child(3) {
    text-align: right;
  }

  & > :nth-child(4) {
    text-align: right;
  }
`;
export const ItemDescriptionHeader = styled(ItemDescriptionRow)`
  margin-bottom: 2.4rem;
`;

export const ItemDescriptionBody = styled(ItemDescriptionRow)`
  strong {
    font-size: 0.75rem;
  }
  span {
    font-weight: bold;
    color: ${(props) => props.theme.color.text.bodyA};
  }
  & > span:nth-child(2) {
  }
  margin-bottom: 0.8rem;
`;

export const InvoiceBodyFooterAmount = styled.div`
  padding: 1rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: white;
    font-weight: bold;
  }
  strong {
    font-size: 1.5rem;

    color: white;
  }
`;

export const InvoiceBodyFooter = styled(Card)`
  padding: 0;

  grid-column: 1/-1;

  background: ${(props) => props.theme.color.invoiceTable.bg};

  & > :nth-child(1) {
  }

  & > :nth-child(2) {
    background: ${(props) => props.theme.color.invoiceTable.footerBg};
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  @media (max-width: 400px) {
    ${ItemDescriptionHeader} ,${ItemDescriptionBody} {
      grid-template-columns: repeat(2, 1fr);
      > :nth-child(2) {
        display: none;
      }
      > :nth-child(3) {
        display: none;
      }
    }
  }
`;
