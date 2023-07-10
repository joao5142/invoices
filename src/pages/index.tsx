import { Main } from "@/components/layouts/Main";
import { Aside } from "../components/layouts/Aside/index";
import Image from "next/image";
import { StatusButton } from "@/components/ui/StatusButton";
import {
  ButtonNewInvoice,
  Content,
  Header,
  InvoiceItem,
  InvoiceItemsContainer,
} from "@/styles/pages/home/styles";

import iconPlusImg from "@/assets/images/icon-plus.svg";
import { ButtonNewInvoiceIcon } from "@/components/layouts/Main/styles";
import { Filter } from "@/components/pages/home/Filter";

import iconArrowRightImg from "@/assets/images/icon-arrow-right.svg";
import { NewInvoiceModal } from "@/components/pages/home/NewInvoiceModal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {
  const [isNewInvoiceModalOpen, setIsNewInvoiceModalOpen] = useState(false);

  const router = useRouter();

  function handleNavigateInvoiceItem() {
    router.push("/invoice/1");
  }
  return (
    <>
      <Main>
        <Content>
          <Header>
            <div>
              <strong>Invoices</strong>
              <span>There are 7 total invoices.</span>
            </div>

            <Filter />
            <ButtonNewInvoice onClick={() => setIsNewInvoiceModalOpen(true)}>
              <ButtonNewInvoiceIcon>
                <Image src={iconPlusImg} width={10} alt="" />
              </ButtonNewInvoiceIcon>
              New Invoice
            </ButtonNewInvoice>
          </Header>

          <InvoiceItemsContainer>
            <InvoiceItem onClick={handleNavigateInvoiceItem}>
              <span>
                #<strong>Rt3080</strong>
              </span>
              <span>Due 19 aug 2023</span>
              <span>Jesen huang</span>
              <strong>£1,800.9</strong>
              <StatusButton status="paid" />
              <Image width={10} src={iconArrowRightImg} alt="" />
            </InvoiceItem>
          </InvoiceItemsContainer>
        </Content>
        <AnimatePresence>
          {isNewInvoiceModalOpen && (
            <NewInvoiceModal onClose={() => setIsNewInvoiceModalOpen(false)} />
          )}
        </AnimatePresence>
      </Main>
    </>
  );
}
