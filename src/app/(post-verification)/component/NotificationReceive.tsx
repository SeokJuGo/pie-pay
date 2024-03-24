'use client'

import * as styles from '@/styles/notification/notificationReceive.css'
import Image from "next/image";
import withdraw from "@/assets/icons/withdraw.svg";
import deposit from "@/assets/icons/deposit.svg";
import instead from "@/assets/icons/instead.svg";
import noti from "@/assets/icons/notification.svg";
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

const notification = {
    notificationId: 1,
    message: "40,000원 결제",
    type: "withdraw",
    createdAt: new Date(),
    readOrNot: false
}


dayjs.extend(relativeTime);
dayjs.locale('ko')
export default function NotificationReceive() {
    const route = useRouter();
    const [isVisible, setIsVisible] = useState<boolean>(false)
    useEffect(() => {
        setTimeout(() => setIsVisible(prevState => !prevState), 100);
    }, []);

    const onClickNotification= ()=>{
        route.replace("/notification")
    }
    return (<div onClick={onClickNotification} className={`${styles.container}  ${isVisible && styles.visible}`}>
        
        <div className={styles.content}>
            <div className={styles.title}>
                {notification.type === "withdraw" && <><Image className="" src={withdraw} alt="결제"/><p>결제</p></>}
                {notification.type === "deposit" && <><Image src={deposit} alt="입금"/><p>입금</p></>}
                {notification.type === "instead" && <><Image src={instead} alt="대신"/><p>대신 내주기</p></>}
                {notification.type === "notification" && <><Image src={noti} alt=""/><p>결제 알림</p></>}
            </div>
            <p className={styles.paragraph}>지금</p>
        </div>
        <p>{notification.message}</p>
    </div>);
}