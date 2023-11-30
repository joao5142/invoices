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
import { FormSchemaType, IInvoiceSchema } from "@/schema/form";
import { addDaysToDate, formatDate } from "@/utils/date";
import { initialValues } from "../../schema/form";

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

export interface IInvoiceDataFetch extends IInvoiceSchema {
  status?: StatusType;
}

export default function InvoiceItem() {
  const router = useRouter();

  const { id } = router.query;

  const [invoice, setInvoice] = useState<IInvoiceDataFetch>({
    ...initialValues,
    status: "Pending",
    createdAt: "15-02-2000",
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const invoiceTotalPrice = Array.from(invoice.items).reduce((acc, invoice) => {
    return invoice.quantity * invoice.price + acc;
  }, 0);

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

  if (router.isFallback) {
    <h1>Is loading</h1>;
  }

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
                #<strong>{id}</strong>
              </span>
              <span>Re-branding</span>
            </InvoiceName>
            <InvoiceAddress>
              <span>{invoice?.senderAddress?.street}</span>
              <span>{invoice?.senderAddress?.city}</span>
              <span>{invoice?.senderAddress?.country}</span>
            </InvoiceAddress>

            <InvoiceColumnDate>
              <div>
                <span>Invoice Date</span>
                <strong>{formatDate(invoice?.createdAt!)}</strong>
              </div>
              <div>
                <span>Payment Due</span>
                <strong>
                  {addDaysToDate(invoice?.createdAt!, invoice?.paymentTerms!)}
                </strong>
              </div>
            </InvoiceColumnDate>
            <InvoiceColumnBillTo>
              <span>Bill To</span>
              <strong>{invoice?.clientName}</strong>
              <div>
                <span>{invoice?.clientAddress?.street}</span>
                <span>{invoice?.clientAddress?.city}</span>
                <span>{invoice?.clientAddress?.country}</span>
              </div>
            </InvoiceColumnBillTo>
            <InvoiceColumnEmail>
              <span>Sent to</span>
              <strong>
                <a href="mailto:{invoice?.author.email}">
                  {invoice?.clientEmail}
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
                  <ItemDescriptionBody key={item?.id}>
                    <strong>{item?.name}</strong>
                    <span>{Number(item?.quantity).toFixed(0)}</span>
                    <span>${Number(item?.price).toFixed(2)}</span>
                    <strong>${Number(item?.totalItem).toFixed(2)}</strong>
                  </ItemDescriptionBody>
                ))}
              </InvoiceBodyFooterContent>
              <InvoiceBodyFooterContent>
                <InvoiceBodyFooterAmount>
                  <span>Amount Due</span>

                  <strong>${invoiceTotalPrice?.toFixed(2)}</strong>
                </InvoiceBodyFooterAmount>
              </InvoiceBodyFooterContent>
            </InvoiceBodyFooter>
          </InvoiceBody>
        </Card>
      </Content>
      {isDeleteModalOpen && (
        <DeleteInvoiceModal onClose={() => setIsDeleteModalOpen(false)} />
      )}
      <AnimatePresence>
        {isEditModalOpen && (
          <EditInvoiceModal
            onSaveData={handleGoBack}
            onClose={() => setIsEditModalOpen(false)}
            invoiceData={invoice as IInvoiceSchema}
          />
        )}
      </AnimatePresence>
    </Main>
  );
}
