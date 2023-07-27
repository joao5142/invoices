import { Button } from "@/components/ui/Button";
import {
  DeleteModalButtons,
  DeleteModalContainer,
  DeleteModalContent,
} from "./styles";
import { createPortal } from "react-dom";
import { api } from "@/lib/axios";

import { useRouter } from "next/router";

interface DeleteInvoiceModalProps {
  onClose: () => void;
}
export function DeleteInvoiceModal({ onClose }: DeleteInvoiceModalProps) {
  const router = useRouter();

  const { id: invoiceId } = router.query;

  async function handleDeleteInvoice() {
    try {
      const response = await api.delete(`/invoices/${invoiceId}`);
      router.replace("/");
    } catch (err) {
      console.error(err);
    }
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
