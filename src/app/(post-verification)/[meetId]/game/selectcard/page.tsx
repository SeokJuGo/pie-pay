'use client'

import "./page.css"
import { useEffect, useState } from "react";
import Image from "next/image";
import bankLogo from "@/assets/icons/banklogo.svg"
import bankMagnetic from "@/assets/icons/bankmagnetic.svg"
import {Member} from "@/model/member";
import {useQueryClient} from "@tanstack/react-query";
import GameBackground from "@/app/(post-verification)/[meetId]/game/component/GameBackground";

type Props = {
    params: { meetId: string },
}
export default function SelectCard({params}:Props) {
    const {meetId} = params;
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(99)

    const queryClient = useQueryClient();
    const Members = queryClient.getQueryData(["members",meetId]) as Member[];
    const randomPerson = Math.floor(Math.random() * Members.length);
    useEffect(() => {

        setIsOpen(true);
    }, []);

    const handleCardClick = (index:any) => {
        setSelected(index);
    };


    return (
        <div className="card-body">

            <ul className={`cards-stack ${isOpen ? 'opened' : 'stacked'}`}>
                {Array.from({length: 9}, (_, i) => (
                    <>
                        {(selected === i) && <li key={i + 1}
                                                 className={`${isNaN(selected) && "front"} card card-${i + 1} ${selected === i ? 'selectedfront' : ''}`}
                                                 onClick={() => handleCardClick(i)}>
                            <div>
                                <Image src={bankLogo} alt=""/>
                                Master
                            </div>
                            <Image src={bankMagnetic} alt=""/>
                            <p>{Members[randomPerson].nickname}</p>
                        </li>}
                        <li key={i + 1} className={`card card-${i + 1} ${selected === i ? 'selectedback' : ''}`}
                            onClick={() => handleCardClick(i)}>
                            <div className="strip"></div>
                            <div className="mstrip"></div>
                            <div className="sstrip"></div>


                        </li>
                    </>
                ))}
            </ul>
            {selected != 99 && <div className="result"></div>}

            <GameBackground/>
        </div>
    );
};
