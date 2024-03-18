'use client';

import * as styles from "@/styles/header.css"
import theme from "@/styles/theme/theme";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/icons/piepaylogo.svg"
import MeetingIcon from "./MeetingIcon";
import NotificationIcon from "./NotificationIcon";
import ProfileIcon from "./ProfileIcon";


export default function Header() {
    const path = usePathname();
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logoContainer}><Image className={styles.headerLogo} src={logo} alt='logo'/></Link>
            <div className={styles.navigation}>
                <Link href="/" className={styles.buttonContainer}><MeetingIcon color={ path === "/" ? theme.blue : theme.blueGray} />모임</Link>
                <Link href="/alarm" className={styles.buttonContainer}><NotificationIcon color={ path.includes("alarm") ? theme.blue : theme.blueGray} />알림</Link>
                <Link href="/mypage/1" className={styles.buttonContainer}><ProfileIcon color={ path.includes("mypage") ? theme.blue : theme.blueGray} />내 정보</Link>
            </div>
        </div>
    );
}