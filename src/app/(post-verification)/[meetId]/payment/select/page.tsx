'use client'

import * as styles from "@/styles/payment/select/selectMember.css"
import one from "@/assets/icons/payment1.svg";
import SearchNickname from "@/app/(post-verification)/[meetId]/payment/select/component/SearchNickname";
import SelectedMember from "@/app/(post-verification)/[meetId]/payment/select/component/SelectedMember";
import MemberList from "@/app/(post-verification)/[meetId]/payment/select/component/MemberList";
import ListHeader from "@/app/(post-verification)/[meetId]/payment/select/component/ListHeader";
import Header from "@/app/(post-verification)/[meetId]/payment/component/Header"
import ParticipateButton from "@/app/(post-verification)/[meetId]/payment/select/component/ParticipateButton";
import { useQueryClient} from "@tanstack/react-query";
import {useMemberFilter} from "@/store/useMemberFilter";
import {Member} from "@/model/member";
import {useEffect} from "react";

type Props = {
    params: { meetId: string },
}
export default function Page({params}:Props) {
    const {meetId} = params;
    const queryClient = useQueryClient();
    const Members = queryClient.getQueryData(["members",meetId]) as Member[];
    const { setFilterMembers } = useMemberFilter();

    useEffect(() => {
        if(!Members || Members.length<=0) return;
        setFilterMembers(Members);
    }, [Members]);

    return (
        <div className={styles.container}>
                <Header type={one}/>
            <div className={styles.contentContainer}>
                <div className={styles.headerContainer}>
                    <p className={styles.title}>결제 멤버를 선택해 주세요</p>
                </div>
                <div className={styles.listHeaderContainer}>
                <SelectedMember/>
                    <SearchNickname/>
                    <hr className={styles.hr}/>
                    {<ListHeader />}
                </div>
                <MemberList/>
                <ParticipateButton meetId={meetId}/>
            </div>
        </div>
    );
}