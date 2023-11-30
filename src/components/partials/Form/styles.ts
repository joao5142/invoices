import { Button } from "@/components/ui/Button/styles";
import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;

  grid-template-rows: repeat(3, minmax(auto, 1fr));

  gap: 30px;

  padding-right: 2rem;

  strong {
    display: inline-block;
    font-size: 0.75rem;

    color: ${(props) => props.theme.color.main};

    margin-bottom: 1.3rem;
  }
  label {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  label:has(input[data-invalid]) span {
    color: rgb(236, 87, 87);
  }
  label input,
  label select {
    border: 0;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.color.form.fieldBorder};
    outline: 0;

    background: ${(props) => props.theme.color.form.fieldBg};

    padding: 1rem 1.25rem;
    width: 100%;

    font-weight: bold;

    color: ${(props) => props.theme.color.text.heading};
    font-size: 0.75rem;

    &::placeholder {
      color: ${(props) => props.theme.color.text.placeholder};
      font-weight: bold;
    }

    &[data-invalid] {
      border-color: #ec647d;
    }

    &:focus {
      border-color: ${(props) => props.theme.color.secondary};
    }
  }

  label select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background: url(/assets/images/icon-arrow-down.svg) no-repeat;
    background-size: 12px;
    background-position: right 1.25rem center;
  }
  label span {
    font-size: 0.75rem;

    color: ${(props) => props.theme.color.text.formLabel};
  }

  label input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;

    background: url("/assets/images/icon-calendar.svg") no-repeat;

    border-width: thin;
  }
`;

export const BillFromContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  & > label:nth-child(1) {
    grid-column: 1 / -1;
  }
`;

export const BillToContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  & > :nth-child(1),
  & > :nth-child(2),
  & > :nth-child(3) {
    grid-column: 1/-1;
  }
`;

export const BillToContainerMoreInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  margin-top: 1.7rem;

  & > :nth-child(3) {
    grid-column: 1/-1;
  }
`;

export const ItemsContainer = styled.div`
  strong {
    display: block;

    font-size: 1.2rem;

    color: ${(props) => props.theme.color.text.bodyB};
  }

  ${Button} {
    width: 100%;
  }
`;

export const Item = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 4.125rem 1.25fr 0.75fr min-content;
  margin-bottom: 1rem;
  gap: 10px;
  align-items: center;

  label span:nth-child(2) {
    display: block;
    padding: 1rem 0;

    font-weight: bold;
  }

  & > :nth-last-child(1) {
    align-items: end;
    span {
      height: 14px;
    }
  }

  svg {
    display: block;
    margin: 1rem 0;
  }
  svg path {
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease;

      fill: #ec5757;
    }
  }
`;

export const ErrorText = styled.span`
  display: inline-block;
  color: #ec647d;

  font-size: 0.8rem;

  margin-bottom: 0.8rem;
`;
