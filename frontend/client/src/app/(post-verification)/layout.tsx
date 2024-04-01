import type {Metadata} from "next";
import Header from "./component/Header"
import {ReactNode} from "react";
import RQProvider from "@/app/(post-verification)/component/RQProvider";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getMembers} from "@/api/member";
import {getAccount} from "@/api/account";
import NotificationReceive from "@/app/(post-verification)/component/NotificationReceive";
import * as styles from "@/styles/main/main.css"
import {cookies} from "next/headers";
import {getMeetList} from "@/api/meet/meetList";

export const metadata: Metadata = {
    title: "piepay",
    description: "Generated by create next app",
};

type Props = { children: ReactNode, modal: ReactNode }


export default async function PostVerificationLayout({children}: Props) {
    const queryClient = new QueryClient();
    const token = cookies().get('accessToken')?.value;

    await queryClient.prefetchQuery({queryKey: ['account', token], queryFn: getAccount});
    await queryClient.prefetchQuery({queryKey: ['meetList', token], queryFn: getMeetList});
    const dehydratedState = dehydrate(queryClient);
    return (
        <div className="h-screen">
                <Header/>
                <HydrationBoundary state={dehydratedState}>
                    <NotificationReceive/>
                    <div className={styles.mainContainer}>

                        {children}
                    </div>
                </HydrationBoundary>
        </div>
    );
}
