'use client'

import {useRouter} from "next/navigation";
import * as styles from "@/styles/payment/select/selectMember.css";

type Props={
    meetId: string
}

export default function SelectButton({ meetId }: Props) {
    const route = useRouter();
    const onClickReplace = () => {
        route.replace(`/${meetId}/payment/select`);
    }
    return(
        <button onClick={onClickReplace} >
            참가자 선택하러가기
        </button>
    )
}