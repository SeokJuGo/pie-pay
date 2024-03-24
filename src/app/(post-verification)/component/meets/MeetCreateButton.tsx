"use client";

import * as styles from "@/styles/main/mainButton.css";
import * as fontCss from "@/styles/fonts.css";

interface CreateMeetButtonProps{
    onClick:() => void;
}

export default function MeetCreateButton({ onClick }: CreateMeetButtonProps){
    return (
        <div>
            <button
                className={`${styles.mainButton.fixedButton} ${fontCss.semibold}`}
                onClick={onClick}
            >
                새로운 모임 만들기
            </button>
        </div>
    );
}