'use client'

import {useRouter} from "next/navigation";
import * as styles from "@/styles/payment/select/selectMember.css";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useMemberFilter} from "@/store/useMemberFilter";



type Props={
    meetId: string
}

export default function ParticipateButton({ meetId }: Props) {
    const route = useRouter();
    const {filterMembers} = useMemberFilter();

    const { mutate } = useMutation({
        mutationFn: (id) => axios.post('http://localhost:9090/pay/parties', filterMembers.filter(member=>member.isSelected)),
        onSuccess: (data) => {
            route.replace(`approve/${data.data["payId"]}/proceed`);
        },
        onError: () => { console.error('에러 발생') },
        onSettled: () => { console.log('결과에 관계 없이 무언가 실행됨') }
    });

    return(
    <button onClick={()=>mutate()} className={styles.submitButton}>
        <div>알림 보내기</div>
    </button>
    )
}