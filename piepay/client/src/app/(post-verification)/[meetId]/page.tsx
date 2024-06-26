"use client";


import { useQuery, useQueryClient } from '@tanstack/react-query';
import {getCookie} from "@/util/getCookie";
import MeetInfoCard from "@/app/(post-verification)/[meetId]/component/MeetInfoCard";
import {MeetInfoResponse, Meet} from "@/model/meet";
import InviteMemberCard from "@/app/(post-verification)/[meetId]/component/InviteMemberCard";
import SelectMeetImageCard from "@/app/(post-verification)/[meetId]/component/SelectMeetImageCard";
import MemberLayout from "@/app/(post-verification)/[meetId]/component/MemberLayout";
import PaymentLayout from "@/app/(post-verification)/[meetId]/component/PaymentLayout";
import HighlightLayout from "@/app/(post-verification)/[meetId]/component/HighlightLayout";
import PaymentSelectButton from "@/app/(post-verification)/[meetId]/component/PaymentSelectButton";
import MeetInviteModal from "@/app/(post-verification)/[meetId]/component/MeetInviteModal";

import { useSSE } from '@/store/useSSE';
import {useStore} from "@/store/useMeetModalStore";
import {useEffect} from "react";


type Props = {
    params: { meetId: string },
}


export default function Meet({params}: Props) {
    const {eventSource} = useSSE();
    const token = getCookie('accessToken');
    const {meetId} = params;
    const queryClient = useQueryClient();
    const meetInfo: Meet | undefined = queryClient.getQueryData(['meetInfo', meetId, token]);
    const {isInviteModalOn, setInviteModalStatus, setReceiptModalStatus, isReceiptModalOn} = useStore((state) => state);

    useEffect(()=>{
        setInviteModalStatus(false);
        setReceiptModalStatus(false);
    }, []);


    if (typeof meetInfo !== 'undefined') {
        return (
            <section>
                <MeetInviteModal meetInvitation={ meetInfo.meetInvitation }/>
                <>
                    {meetInfo.memberCount === 1 ?
                    <>
                        <MeetInfoCard params={{ meetId }} />
                        {meetInfo.memberCount === 1 && <InviteMemberCard meetInvitation={ meetInfo.meetInvitation } />}
                        {meetInfo.meetImage === null && <SelectMeetImageCard />}
                    </>
                    :
                    <>
                        <MeetInfoCard params={{ meetId }} />
                        <MemberLayout params={{ meetId }} />
                        <PaymentLayout params={{ meetId }} />
                        <HighlightLayout params={{ meetId }} />
                        <PaymentSelectButton meetId={meetId}/>
                    </>
                    }
                </>
            </section>
        );
    } else {
        return (
          <>
              모임 데이터를 불러오지 못했어요<br/>
              새로고침 해주세요
          </>
        );
    }
}
