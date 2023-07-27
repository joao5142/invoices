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
import { validationSchema } from "@/schema/form";
import { api } from "@/lib/axios";
import { toast } from "react-toastify";

interface NewInvoiceModalProps {
  onClose: () => void;
  onSaveData: () => void;
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

export function NewInvoiceModal({ onClose, onSaveData }: NewInvoiceModalProps) {
  function handleCloseModal(event: Event) {
    if (event.currentTarget == event.target) {
      onClose();
    }
  }

  async function handleSaveData(data: typeof validationSchema) {
    try {
      const {
        data: { success, message },
      } = await api.post("/invoices", data);
      if (success) {
        console.log("save");
        toast.success(message);
        onSaveData();
        onClose();
      } else {
        console.error(message);
        toast.error(message);
      }
    } catch (err) {
      console.error(err);
    }
  }

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
            <Form id="form-data" onSaveData={handleSaveData} />
            <ButtonsContainer>
              <Button variant="quaternary" onClick={() => onClose()}>
                Discard
              </Button>
              <Button form="form-data" variant="primary">
                Save
              </Button>
            </ButtonsContainer>
          </Content>
        </NewInvoiceModalContent>
      </NewInvoiceModalContainer>
    </>
  );
}
