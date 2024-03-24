'use client'

import {getPayment} from "@/api/payment";
import BankAccount from "@/app/(post-verification)/component/BankAccount";
import two from "@/assets/icons/payment2.svg";
import Header from "@/app/(post-verification)/[meetId]/payment/component/Header";
import ParticipantList from "@/app/(post-verification)/[meetId]/payment/approve/[payId]/component/ParticipantList";
import Timer from "@/app/(post-verification)/[meetId]/payment/approve/[payId]/component/Timer"
import React, {useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import StateButton from "@/app/(post-verification)/[meetId]/payment/approve/[payId]/component/StateButton";
import * as styles from "@/styles/payment/proceed/proceedmain.css"
type Props = {
    params: { payId: string },
}
export default function Page({params}:Props) {
    const {payId} = params;
    const { data: payment, isLoading, error } = useQuery({queryKey: ['payment',payId], queryFn: getPayment}) ;


    return (<div>
        <Header type={two}/>
        <p className={styles.paragraph.title}>결제 동의를 해 주세요</p>
        <Timer payId={payId}/>
        <BankAccount/>
        <p className={styles.paragraph.total}>결제 멤버 {payment?.participants.length}</p>
        <ParticipantList payId={payId}/>
        <StateButton/>
    </div>);
}