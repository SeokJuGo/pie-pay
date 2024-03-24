import Header from "@/app/(post-verification)/[meetId]/payment/component/Header";
import three from "@/assets/icons/payment3.svg";
import {useRouter} from "next/navigation";
import * as styles from "@/styles/payment/result/result.css";
import ParticipantResultList from "@/app/(post-verification)/[meetId]/payment/approve/[payId]/component/ParticipantResultList";
import { useReceiptModal } from '@/store/useReceiptModal';
import ReceiptBox from "@/app/(post-verification)/[meetId]/payment/approve/[payId]/component/ReceiptBox";

type Props={
    params: { payId: string },
}
export default function Page({params}: Props) {
    const {payId} = params;

    return (<>
        <Header type={three}/>
        <p className={styles.pargraph.title}>결제가 완료됐어요</p>
        <ReceiptBox payId={payId}/>
        <p className={styles.pargraph.paymentMember}>결제 멤버 5</p>
        <ParticipantResultList payId={payId}/>

        <button className={styles.submitButton}>확인</button>

    </>);
}