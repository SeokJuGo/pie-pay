'use client'

import {useQuery} from "@tanstack/react-query";
import {getNotification} from "@/api/notification";
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Image from "next/image";
import instead from "@/assets/icons/instead.svg";
import withdraw from "@/assets/icons/withdraw.svg";
import deposit from "@/assets/icons/deposit.svg";
import noti from "@/assets/icons/notification.svg"
import * as styles from "@/styles/notification/notificationMessage.css"

dayjs.extend(relativeTime);
dayjs.locale('ko')

export default function NotificationMessage() {
    const {data: notification, isLoading, error} = useQuery({queryKey: ['notification'], queryFn: getNotification});
    return (
        <div className={styles.container}>
            {notification?.map((notification) => (
                <div className={styles.box}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            {notification.type === "withdraw" && <><Image className="" src={withdraw} alt="결제"/><p>결제</p></>}
                            {notification.type === "deposit" && <><Image src={deposit} alt="입금"/><p>입금</p></>}
                            {notification.type === "instead" && <><Image src={instead} alt="대신"/><p>대신 내주기</p></>}
                            {notification.type === "notification" && <><Image src={noti} alt=""/><p>결제 알림</p></>}
                        </div>
                        <p className={styles.paragraph}>{dayjs(notification.createdAt).fromNow()}</p>
                    </div>
                    <p>{notification.message}</p>

                </div>))}
        </div>
    );
}