import { ReactNode } from "react";
import { StatusButtonContainer } from "./styles";

export type StatusType = "paid" | "pending" | "draft";
export interface IButton {
  status: StatusType;
}

interface ButtonContainerProps extends IButton {}

export function StatusButton({ status }: ButtonContainerProps) {
  return (
    <StatusButtonContainer status={status}>
      <strong>{status}</strong>
    </StatusButtonContainer>
  );
}
