import { createPortal } from "react-dom";
import {
  EditInvoiceModalContainer,
  EditInvoiceModalContent,
  Content,
  ButtonsContainer,
} from "./styles";
import { AnimatePresence } from "framer-motion";
import { Form } from "@/components/partials/Form";
import { Button } from "@/components/ui/Button";
import { FormSchemaType, validationSchema } from "@/schema/form";
import { api } from "@/lib/axios";

interface EditInvoiceModalProps {
  onClose: () => void;
  onSaveData: () => void;
  invoiceData: FormSchemaType;
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

export function EditInvoiceModal({
  onClose,
  onSaveData,
  invoiceData,
}: EditInvoiceModalProps) {
  function handleCloseModal(event: Event) {
    if (event.currentTarget == event.target) {
      onClose();
    }
  }

  async function handleSaveData(data: FormSchemaType) {
    try {
      const response = await api.put("/invoices", data);
      onSaveData();
      onClose();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <EditInvoiceModalContainer
        onClick={handleCloseModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <EditInvoiceModalContent
          variants={animation}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Content>
            <h2>Edit Invoice</h2>
            <Form
              initialData={invoiceData}
              id="form-data"
              onSaveData={handleSaveData}
            />
            <ButtonsContainer>
              <Button variant="quaternary" onClick={() => onClose()}>
                Discard
              </Button>
              <Button form="form-data" variant="primary">
                Update
              </Button>
            </ButtonsContainer>
          </Content>
        </EditInvoiceModalContent>
      </EditInvoiceModalContainer>
    </>
  );
}
