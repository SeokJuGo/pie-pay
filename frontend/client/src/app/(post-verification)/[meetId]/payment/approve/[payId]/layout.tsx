import type {Metadata} from "next";
import {ReactNode} from "react";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getPayment, getPaymentResult} from "@/api/payment";
import { getReceipt } from '@/api/receipt';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

type Props = { children: ReactNode,  params: { payId: string }}

export default async function PaymentModalLayout({children, params}: Props) {
    const token = cookies().get('accessToken');
    let {payId} = params;
    console.log(token);
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({queryKey: ['payment',Number(payId),token?.value], queryFn: getPayment});


    const dehydratedState = dehydrate(queryClient);


    return (
        <div className="w-[100%] h-[100%]">
            <HydrationBoundary state={dehydratedState}>
                
                {children}
            </HydrationBoundary>
        </div>
    );
}
