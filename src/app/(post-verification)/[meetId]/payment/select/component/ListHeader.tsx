'use client'

import Image from "next/image";
import check from "@/assets/icons/check.svg";
import uncheck from "@/assets/icons/uncheck.svg";
import * as styles from "@/styles/payment/select/listHeader.css";
import {useMemberFilter} from "@/store/useMemberFilter";


export default function ListHeader() {
    const {filterMembers,handleType} = useMemberFilter();
    const host = filterMembers[0];
    return (
        <div className={styles.container}>
            <div className={styles.totalMember}>멤버 {filterMembers.filter((member)=>member.isFiltered).length}</div>
            <div className={styles.member}>

                {host && host.isTypeAlcohol && <button onClick={()=>handleType()}><Image src={check} alt="" width={20} height={20}/></button>}
                {host && !host.isTypeAlcohol && <button onClick={()=>handleType()}><Image src={uncheck} alt="" width={20} height={20}/></button>}

                <button onClick={()=>handleType()}><div className={styles.totalMember}>주류 포함</div></button>
            </div>
        </div>);
}