import type {Metadata} from "next";
import {ReactNode} from "react";
import * as styles from "@/styles/game/game.css"
import Header from "@/app/(post-verification)/[meetId]/game/component/Header";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

type Props = {
    children: ReactNode,
}

export default async function GameLayout({children}: Props) {


    return (
        <div className={styles.container}>
            <Header/>
                {children}

        </div>
    );
}
