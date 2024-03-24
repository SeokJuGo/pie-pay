"use client";


import * as styles from "@/styles/main/mainButton.css";
import * as fontCss from "@/styles/fonts.css";

interface MeetJoinButtonProps{
    onClick:() => void;
}

export default function MeetJoinButton({onClick}: MeetJoinButtonProps) {
    return (
        <button
            className={`${styles.mainButton.bottomButton} ${fontCss.semibold}`}
            onClick={onClick}
        >모임 입장하기</button>
    );
}