import styled, { css } from "styled-components";
import { IButton, StatusType } from ".";

function getCssButtonByStatus(status: StatusType) {
  switch (status) {
    case "Paid":
      return css`
        background: rgba(51, 214, 159, 0.06);
        color: rgb(51, 214, 159);

        strong::before {
          background: rgb(51, 214, 159);
        }
      `;

    case "Pending":
      return css`
        background: rgba(255, 143, 0, 0.06);
        color: rgb(255, 143, 0);

        strong::before {
          background: rgb(255, 143, 0);
        }
      `;

    case "Draft":
      return css`
        background: rgba(55, 59, 83, 0.06);
        color: rgb(55, 59, 83);

        strong::before {
          background: rgb(55, 59, 83);
        }
      `;

    default:
      return css``;
  }
}
export const StatusButtonContainer = styled.button<IButton>`
  border-radius: 0.4rem;
  height: 2.5rem;
  width: 6.25rem;

  font-size: 0.75rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: 0;

  ${(props) => props.status && getCssButtonByStatus(props.status)}

  strong {
    text-transform: capitalize;

    display: flex;
    align-items: center;

    &::before {
      content: "";

      width: 0.5rem;
      height: 0.5rem;
      margin-right: 0.5rem;
      border-radius: 50%;
    }
  }
`;
