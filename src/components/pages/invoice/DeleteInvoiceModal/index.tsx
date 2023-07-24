import { Button } from "@/components/ui/Button";
import {
  DeleteModalButtons,
  DeleteModalContainer,
  DeleteModalContent,
} from "./styles";
import { createPortal } from "react-dom";
import { api } from "@/lib/axios";

interface DeleteInvoiceModalProps {
  onClose: () => void;
  invoiceId: number;
}
export function DeleteInvoiceModal({
  onClose,
  invoiceId,
}: DeleteInvoiceModalProps) {
  async function handleDeleteInvoice() {
    try {
      const response = await api.delete(`/invoices/${invoiceId}`);
    } catch (err) {}
  }
  return createPortal(
    <DeleteModalContainer>
      <DeleteModalContent>
        <strong>Confirm Deletion</strong>
        <p>
          Are you sure you want to delete invoice VL7515? This action cannot be
          undone.
        </p>
        <DeleteModalButtons>
          <Button variant="quaternary" onClick={() => onClose()}>
            Cancel
          </Button>
          <Button variant="quintary" onClick={handleDeleteInvoice}>
            Delete
          </Button>
        </DeleteModalButtons>
      </DeleteModalContent>
    </DeleteModalContainer>,
    document.body
  );
}
