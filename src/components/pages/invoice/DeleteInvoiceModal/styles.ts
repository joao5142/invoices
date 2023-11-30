import styled from "styled-components";

export const DeleteModalContainer = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 3;
`;

export const DeleteModalContent = styled.div`
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 30rem;
  padding: 2rem;

  background: ${(props) => props.theme.color.form.bg};

  border-radius: 8px;

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme.color.text.heading};

    margin-bottom: 0.7rem;
  }
  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme.color.text.bodyA};
    line-height: 1.3rem;
  }
`;

export const DeleteModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
