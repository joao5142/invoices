import { createPortal } from "react-dom";
import {
  NewInvoiceModalContainer,
  NewInvoiceModalContent,
  Content,
  ButtonsContainer,
} from "./styles";
import { AnimatePresence } from "framer-motion";
import { Form } from "@/components/partials/Form";
import { Button } from "@/components/ui/Button";

interface NewInvoiceModalProps {
  onClose: () => void;
}
export function NewInvoiceModal({ onClose }: NewInvoiceModalProps) {
  function handleCloseModal(event: Event) {
    if (event.currentTarget == event.target) {
      onClose();
    }
  }

  const animation = {
    hidden: {
      x: "-100%",
      transition: { type: "spring", duration: 0.75 },
    },
    visible: {
      x: 0,
      transition: { type: "spring", duration: 0.75 },
    },
  };

  return (
    <>
      <NewInvoiceModalContainer
        onClick={handleCloseModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <NewInvoiceModalContent
          variants={animation}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Content>
            <h2>Create Invoice</h2>
            <Form />
            <ButtonsContainer>
              <Button variant="quaternary">Discard</Button>
              <Button variant="tertiary">Save as Draft</Button>
              <Button variant="primary">Save & Send</Button>
            </ButtonsContainer>
          </Content>
        </NewInvoiceModalContent>
      </NewInvoiceModalContainer>
    </>
  );
}
