"use client";

import back from "@/assets/icons/x.svg"
import Image from 'next/image';
import {useReceiptModal} from "@/store/useReceiptModal";
import { useRouter } from 'next/navigation';

export default function ModalCloseButton() {
    const {updateState} = useReceiptModal();
    const route = useRouter();
    const handleModal = () =>{
      updateState();
      route.back();
    }

    return (
        <button type="button" aria-label="Go Back" onClick={()=>updateState()}>
            <Image src={back} width={32} height={32} alt='button'/>
        </button>
    )
}