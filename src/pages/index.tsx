import { Main } from "@/components/layouts/Main";
import { Aside } from "../components/layouts/Aside/index";
import Image from "next/image";
import { StatusButton, StatusType } from "@/components/ui/StatusButton";
import { ButtonNewInvoice, Content, Header, InvoiceItem, InvoiceItemsContainer } from "@/styles/pages/home/styles";

import iconPlusImg from "@/assets/images/icon-plus.svg";
import { ButtonNewInvoiceIcon } from "@/components/layouts/Main/styles";
import { Filter } from "@/components/pages/home/Filter";

import iconArrowRightImg from "@/assets/images/icon-arrow-right.svg";
import { NewInvoiceModal } from "@/components/pages/home/NewInvoiceModal";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { api } from "@/lib/axios";

const pageVariants = {
	initial: {
		opacity: 0,
		x: 1000,
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
// interface IInvoicesData{
// 	data: IInvoice[],
// }
interface IInvoices{
	id: number;
	price: number;
	name: string;
	created_at: string;
	status: StatusType;
}

export default function Home() {
	const [isNewInvoiceModalOpen, setIsNewInvoiceModalOpen] = useState(false);
	const [invoices, setInvoices] = useState<IInvoices[]>([]);

	const router = useRouter();

	function handleNavigateInvoiceItem(invoiceId: number) {
		router.push(`/invoice/${invoiceId}`);
	}
	async function fetchInvoices() {
		try {
			const response = await api.get("/invoices");
			const data = response.data;
			setInvoices(data.invoices);
		} catch (error) {
			console.error("Erro ao buscar os invoices:", error);
		}
	}

	useEffect(() => {
		fetchInvoices();
	}, []);
	return (
		<>
			<Main
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
						{invoices.map((invoice) => (
							<InvoiceItem  key={invoice.id} onClick={() => handleNavigateInvoiceItem(invoice.id)}>
							<span>
								#<strong>{invoice.id}</strong>
							</span>
							<span>{invoice.created_at}</span>
							<span>{invoice.author.name}</span>
							<strong>R$ {invoice.total}</strong>
							<StatusButton status={invoice.status} />
							<Image width={10} src={iconArrowRightImg} alt="" />
						</InvoiceItem>
							))}
					</InvoiceItemsContainer>
				</Content>
				<AnimatePresence>
					{isNewInvoiceModalOpen && <NewInvoiceModal onClose={() => setIsNewInvoiceModalOpen(false)} />}
				</AnimatePresence>
			</Main>
		</>
	);
}
