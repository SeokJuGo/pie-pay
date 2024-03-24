import * as styles from "@/styles/payment/header.css";
import Image from "next/image";
import XBackButton from "@/app/(post-verification)/component/XBackButton";

type Props = ({
    type: HTMLImageElement;
});

export default function Header({type}: Props) {
    return (
        <div>
            <div className={styles.header}>
                <XBackButton/>
                <Image src={type} alt=""/>
                <div/>
            </div>
        </div>
    );
}