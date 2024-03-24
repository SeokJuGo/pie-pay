"use client";

import {useRouter} from "next/navigation";
import back from "@/assets/icons/left.svg"
import Image from 'next/image';

export default function BackButton() {
    const router = useRouter();
    const onClickBack = () => {
        router.back();
    }
    return (
        <button type="button" aria-label="Go Back" onClick={onClickBack}>
            <Image src={back} width={32} height={32} alt='button'/>
        </button>
    )
}