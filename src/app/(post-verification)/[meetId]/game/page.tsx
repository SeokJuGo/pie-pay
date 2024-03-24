'use client'

import SelectButton from "@/app/(post-verification)/[meetId]/payment/component/SelectButton";
import Header from "@/app/(post-verification)/[meetId]/game/component/Header";
import Image from "next/image";
import * as styles from "@/styles/game/gameList.css"
export default function Game() {

    const handlePush =() =>{
        return;
    }
    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <button onClick={handlePush} className={`${styles.box}`}>

                    <img className={styles.image} src="/assets/images/selectcard.png"/>
                    <br/>
                    <p>카드 뽑기</p>


                </button>
                <button
                    className={styles.box}>
                    <p>초성 게임</p>
                    {/*<img className="hover:scale-125 duration-300" src="/assets/images/selectcard.png"/>*/}

                </button>
            </div>
        </div>
    );
}