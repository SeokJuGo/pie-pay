'use client'

import React, {useState} from "react";
import * as styles from "@/styles/payment/agree/stateButton.css"
import {useQuery} from "@tanstack/react-query";
import {getAccount} from "@/api/account";

export default function StateButton() {
    const [isAgree, setIsAgree] = useState("await");
    const handleClick = (type: string) => {
        if(type==="instead"){

        }

        if(type==="agree"){


        }

        setIsAgree(type);
    }
    return (
        <div className={styles.container}>
            {isAgree === "agree" && <p className={styles.tip}> TIP : 멤버를 선택해서 대신 결제 할 수 있어요!</p>}
            <div className={styles.content}>

                {isAgree === "await" &&
                    <button onClick={() => handleClick("instead")} className={styles.button.beforeinstead}>대신 내
                        주세요😥</button>}
                {isAgree === "await" &&
                    <button onClick={() => handleClick("agree")} className={styles.button.beforeAgree}>승인하기</button>}
                {isAgree === "instead" && <button className={styles.button.afterinstead}>도움 요청하기👋</button>}

                {isAgree === "agree" && <button className={styles.button.afterAgree}>승인완료</button>}
            </div>
        </div>)
}