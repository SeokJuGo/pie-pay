import {ReactNode} from "react";
import * as styles from "@/styles/payment/select/payment.css"
import SelectButton from "@/app/(post-verification)/[meetId]/payment/component/SelectButton";


type Props = {
    children: ReactNode,
    params: { meetId: string },
}

export default function PaymentModalLayout({params}: Props) {
        const {meetId} = params;


    return (
        <div className={styles.container}>
            <SelectButton meetId={meetId}/>
        </div>
    );
}
