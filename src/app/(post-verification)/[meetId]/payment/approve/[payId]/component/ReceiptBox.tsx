'use client'

import * as styles from "@/styles/payment/result/result.css";
import {useReceiptModal} from "@/store/useReceiptModal";
import {useQuery} from "@tanstack/react-query";
import {getReceipt} from "@/api/receipt";

type Props={
    payId: string;
}
export default function ReceiptBox({payId}:Props){
    const {updateState} = useReceiptModal();
    const onClickReceipt = () =>{
        updateState();
    }
    const { data: receipt, isLoading, error } = useQuery({ queryKey: ['receipt', payId], queryFn: getReceipt });
    return (<div className={styles.box}>
        <p className={styles.boxParagraph.title}>{receipt?.storeName}</p>
        <p className={styles.boxParagraph.balance}>{receipt?.totalAmount.toLocaleString()} 원</p>
        <div className={styles.receiptBox}>
            <button onClick={onClickReceipt} className={styles.receiptButton}>영수증 확인</button>
        </div>
    </div>);
}