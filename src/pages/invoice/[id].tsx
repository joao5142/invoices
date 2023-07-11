import { Main } from "@/components/layouts/Main";
import {
	Card,
	CardHeaderConfig,
	ColumnSpansAddress,
	Content,
	HeaderNavigationBack,
	InvoiceAddress,
	InvoiceBody,
	InvoiceBodyFooter,
	InvoiceBodyFooterAmount,
	InvoiceBodyFooterContent,
	InvoiceColumn,
	InvoiceColumnBillTo,
	InvoiceColumnDate,
	InvoiceColumnEmail,
	InvoiceDate,
	InvoiceHeaderConfig,
	InvoiceName,
	ItemDescriptionBody,
	ItemDescriptionHeader,
} from "@/styles/pages/invoice/styles";
import Image from "next/image";

import arrowLeftIcon from "@/assets/images/icon-arrow-left.svg";
import { useRouter } from "next/router";
import { StatusButton } from "@/components/ui/StatusButton";
import { Button } from "../../components/ui/Button/index";


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
export default function InvoiceItem() {
	const router = useRouter();

	function handleGoBack() {
		router.back();
	}
	return (
		<Main 	initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 20,
    }}>
			<Content>
				<HeaderNavigationBack onClick={handleGoBack}>
					<Image src={arrowLeftIcon} width={8} alt="" />
					<span>Go back</span>
				</HeaderNavigationBack>
				<Card>
					<InvoiceHeaderConfig>
						<div>
							<span>Status</span>
							<StatusButton status="paid" />
						</div>
						<div>
							<Button variant="quaternary">Edit</Button>
							<Button variant="quintary">Delete</Button>
						</div>
					</InvoiceHeaderConfig>
				</Card>

				<Card>
					<InvoiceBody>
						<InvoiceName>
							<span>
								#<strong>RT3080</strong>
							</span>
							<span>Re-branding</span>
						</InvoiceName>
						<InvoiceAddress>
							<span>19 Union Terrace</span>
							<span>London</span>
							<span>E1 3EZ</span>
							<span>United Kingdom</span>
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
							<strong>Jensen Huang</strong>
							<div>
								<span>19 Union Terrace</span>
								<span>London</span>
								<span>E1 3EZ</span>
								<span>United Kingdom</span>
							</div>
						</InvoiceColumnBillTo>
						<InvoiceColumnEmail>
							<span>Sent to</span>
							<strong>
								<a href="mailto:jensenh@mail.com">jensenh@mail.com</a>
							</strong>
						</InvoiceColumnEmail>

						<InvoiceBodyFooter>
							<InvoiceBodyFooterContent>
								<ItemDescriptionHeader>
									<span>Item Name </span>
									<span>QTY.</span>
									<span>Price </span>
									<span>Total </span>
								</ItemDescriptionHeader>

								<ItemDescriptionBody>
									<strong>Brand Guidelines</strong>
									<span>1 </span>
									<span>£1,800.9</span>
									<strong>£1,800.9</strong>
								</ItemDescriptionBody>
							</InvoiceBodyFooterContent>
							<InvoiceBodyFooterContent>
								<InvoiceBodyFooterAmount>
									<span>Amount Due </span>

									<strong>£1,800.9</strong>
								</InvoiceBodyFooterAmount>
							</InvoiceBodyFooterContent>
						</InvoiceBodyFooter>
					</InvoiceBody>
				</Card>
			</Content>
		</Main>
	);
}
