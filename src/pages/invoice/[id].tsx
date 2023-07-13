import {Main} from "@/components/layouts/Main";
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
import {useRouter} from "next/router";
import {StatusButton} from "@/components/ui/StatusButton";
import {Button} from "../../components/ui/Button/index";
import {useEffect, useState} from "react";
import {api} from "@/lib/axios";


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

    const {id} = router.query;
    const [userData, setUserData] = useState<any>(null);

    const fetchUserData = async () => {
        try {
            const response = await api.get(`/invoices/${id}`);
            const data = response.data;
            setUserData(data.invoice);
        } catch (error) {
            console.error("Erro ao buscar os dados do usuário:", error);
        }
    };
    useEffect(() => {
        if (id) {
            fetchUserData();
        }
    }, [id]);

    function handleGoBack() {
        router.back();
    }

    return (
        <Main initial="initial"
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
                    <Image src={arrowLeftIcon} width={8} alt=""/>
                    <span>Go back</span>
                </HeaderNavigationBack>
                <Card>
                    <InvoiceHeaderConfig>
                        <div>
                            <span>Status</span>
                            <StatusButton status={userData?.status}/>
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
								#<strong>{userData?.id}</strong>
							</span>
                            <span>Re-branding</span>
                        </InvoiceName>
                        <InvoiceAddress>
                            <span>{userData?.author.address.street}</span>
                            <span>{userData?.author.address.city}</span>
                            <span>{userData?.author.address.country}</span>
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
                            <strong>{userData?.author.name}</strong>
                            <div>
                                <span>{userData?.author.address.street}</span>
                                <span>{userData?.author.address.city}</span>
                                <span>{userData?.author.address.country}</span>
                            </div>
                        </InvoiceColumnBillTo>
                        <InvoiceColumnEmail>
                            <span>Sent to</span>
                            <strong>
                                <a href="mailto:{userData?.author.email}">{userData?.author.email}</a>
                            </strong>
                        </InvoiceColumnEmail>

                        <InvoiceBodyFooter>
                            <InvoiceBodyFooterContent>
                                <ItemDescriptionHeader>
                                    <ItemDescriptionHeader>
                                        <span>Item Name</span>
                                        <span>QTY.</span>
                                        <span>Price </span>
                                        <span>Total</span>
                                    </ItemDescriptionHeader>
                                </ItemDescriptionHeader>

                                <ItemDescriptionBody>
                                    {userData?.items.map((item) => (
                                        <div key={item.id}>
                                        <strong>{item.name}</strong>
                                        <span>{item.qty}</span>
                                        <span>{item.price}</span>
                                        <strong>{item.total}</strong>
                                        </div>
                                        ))}
                                </ItemDescriptionBody>
                            </InvoiceBodyFooterContent>
                            <InvoiceBodyFooterContent>
                                <InvoiceBodyFooterAmount>
                                    <span>Amount Due</span>

                                    <strong>{userData?.totalPrice}</strong>
                                </InvoiceBodyFooterAmount>
                            </InvoiceBodyFooterContent>
                        </InvoiceBodyFooter>
                    </InvoiceBody>
                </Card>
            </Content>
        </Main>
    );
}
