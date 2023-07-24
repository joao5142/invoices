import { Main } from "@/components/layouts/Main";
import {
  Card,
  Content,
  HeaderNavigationBack,
  InvoiceAddress,
  InvoiceBody,
  InvoiceBodyFooter,
  InvoiceBodyFooterAmount,
  InvoiceBodyFooterContent,
  InvoiceColumnBillTo,
  InvoiceColumnDate,
  InvoiceColumnEmail,
  InvoiceHeaderConfig,
  InvoiceName,
  ItemDescriptionBody,
  ItemDescriptionHeader,
} from "@/styles/pages/invoice/styles";
import Image from "next/image";

import arrowLeftIcon from "@/assets/images/icon-arrow-left.svg";
import { useRouter } from "next/router";
import { StatusButton, StatusType } from "@/components/ui/StatusButton";
import { Button } from "../../components/ui/Button/index";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { DeleteInvoiceModal } from "@/components/pages/invoice/DeleteInvoiceModal";
import { AnimatePresence } from "framer-motion";
import { EditInvoiceModal } from "@/components/pages/invoice/EditInvoiceModal";

const pageVariants = {
  initial: {
    opacity: 0,
    x: -1000,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 1000,
  },
};
interface IIvoiceItem {
  id: number;
  created_at: string;
  deleted_at: string;
  id_invoice: number;
  name: string;
  price: number;
  qty: number;
  totalItem: number;
}
interface IAddress {
  street: string;
  city: string;
  country: string;
}
export interface IInvoiceDataFetch {
  author?: { email: string; id: number; name: string; address: IAddress };
  created_at?: string;
  description?: string;
  id?: number;
  id_client?: number;
  status?: StatusType;
  items?: IIvoiceItem[];
  totalPrice?: string;
}

export default function InvoiceItem() {
  const router = useRouter();

  const { id } = router.query;

  const [invoice, setInvoice] = useState<IInvoiceDataFetch>({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  async function fetchInvoice() {
    try {
      const response = await api.get(`/invoices/${id}`);
      const data = response.data;

      setInvoice(data.invoice);
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    }
  }

  async function handleMarkInvoiceAsPaid() {
    try {
      const response = await api.patch(`/invoices/mark-as-paid/${id}`);
      setInvoice((prevState) => {
        return { ...prevState, status: "Paid" };
      });
    } catch (error) {
      console.error("Erro ao marcar como pago", error);
    }
  }
  function handleDeleteInvoiceItem() {
    setIsDeleteModalOpen(true);
  }
  function handleOpenEditInvoiceModal() {
    setIsEditModalOpen(true);
  }

  function handleGoBack() {
    router.back();
  }

  useEffect(() => {
    if (id) {
      fetchInvoice();
    }
  }, [id]);

  return (
    <Main
      data-view="invoice-item"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <Content>
        <HeaderNavigationBack onClick={handleGoBack}>
          <Image src={arrowLeftIcon} width={8} alt="" />
          <span>Go back</span>
        </HeaderNavigationBack>
        <Card>
          <InvoiceHeaderConfig>
            <div>
              <span>Status</span>
              <StatusButton status={invoice.status!} />
            </div>
            <div>
              <Button
                onClick={() => handleOpenEditInvoiceModal()}
                variant="quaternary"
              >
                Edit
              </Button>
              <Button variant="quintary" onClick={handleDeleteInvoiceItem}>
                Delete
              </Button>
              {(invoice?.status == "Pending" || invoice?.status == "Draft") && (
                <Button
                  onClick={() => handleMarkInvoiceAsPaid()}
                  variant="primary"
                >
                  Mark as Paid
                </Button>
              )}
            </div>
          </InvoiceHeaderConfig>
        </Card>

        <Card>
          <InvoiceBody>
            <InvoiceName>
              <span>
                #<strong>{invoice?.id}</strong>
              </span>
              <span>Re-branding</span>
            </InvoiceName>
            <InvoiceAddress>
              <span>{invoice?.author?.address?.street}</span>
              <span>{invoice?.author?.address?.city}</span>
              <span>{invoice?.author?.address?.country}</span>
            </InvoiceAddress>

            <InvoiceColumnDate>
              <div>
                <span>Invoice Date</span>
                <strong>18 Aug 2021</strong>
              </div>
              <div>
                <span>Payment Due</span>
                <strong>18 Aug 2021</strong>
              </div>
            </InvoiceColumnDate>
            <InvoiceColumnBillTo>
              <span>Bill To</span>
              <strong>{invoice?.author?.name}</strong>
              <div>
                <span>{invoice?.author?.address?.street}</span>
                <span>{invoice?.author?.address?.city}</span>
                <span>{invoice?.author?.address?.country}</span>
              </div>
            </InvoiceColumnBillTo>
            <InvoiceColumnEmail>
              <span>Sent to</span>
              <strong>
                <a href="mailto:{invoice?.author.email}">
                  {invoice?.author?.email}
                </a>
              </strong>
            </InvoiceColumnEmail>

            <InvoiceBodyFooter>
              <InvoiceBodyFooterContent>
                <ItemDescriptionHeader>
                  <span>Item Name</span>
                  <span>QTY.</span>
                  <span>Price </span>
                  <span>Total</span>
                </ItemDescriptionHeader>
                {invoice?.items?.map((item) => (
                  <ItemDescriptionBody key={item.id}>
                    <strong>{item?.name}</strong>
                    <span>{item?.qty}</span>
                    <span>${item?.price}</span>
                    <strong>${item?.totalItem}</strong>
                  </ItemDescriptionBody>
                ))}
              </InvoiceBodyFooterContent>
              <InvoiceBodyFooterContent>
                <InvoiceBodyFooterAmount>
                  <span>Amount Due</span>

                  <strong>${invoice?.totalPrice}</strong>
                </InvoiceBodyFooterAmount>
              </InvoiceBodyFooterContent>
            </InvoiceBodyFooter>
          </InvoiceBody>
        </Card>
      </Content>
      {isDeleteModalOpen && (
        <DeleteInvoiceModal
          onClose={() => setIsDeleteModalOpen(false)}
          invoiceId={invoice?.id!}
        />
      )}
      <AnimatePresence>
        {isEditModalOpen && (
          <EditInvoiceModal
            onSaveData={handleGoBack}
            onClose={() => setIsEditModalOpen(false)}
            invoiceData={invoice}
          />
        )}
      </AnimatePresence>
    </Main>
  );
}
