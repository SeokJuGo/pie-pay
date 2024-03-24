'use client'

import * as styles from "@/styles/payment/select/memberList.css";
import check from "@/assets/icons/check.svg";
import uncheck from "@/assets/icons/uncheck.svg";
import checkBeer from "@/assets/icons/checkbeer.svg"
import uncheckBeer from "@/assets/icons/uncheckbeer.svg"
import Image from "next/image";
import {useMemberFilter} from "@/store/useMemberFilter";
import {FilterMember} from "@/model/member";


export default function MemberList() {
    const {filterMembers, handleCheck} = useMemberFilter();
     const onClickAgree = (member:FilterMember) => {
         if (member.isHost) {
             alert("나는 방장이다");
             return;
        }
         handleCheck(member.memberId, "isSelected")
    }

    return (

        <div className={styles.memberContainer}>
            {filterMembers.filter(member => member.isFiltered)
                .sort((a, b) => (a.isHost === b.isHost) ? 0 : a.isHost ? -1 : 1)
                .map(member => (

          <div key={member.memberId} className={`${styles.container}  ${member.isSelected && styles.backgroundSkyBlue}`}>
            <div className={styles.memberList}>
                <img className={styles.image} src={member.profileImage} alt="" width={50}/>
                <p className={styles.memberName}>
                    {member.isHost && `나 (${member.nickname})`}
                    {!member.isHost && member.nickname}
                </p>
            </div>
            <button onClick={()=>onClickAgree(member)}>
                {member.isSelected && !member.isTypeAlcohol && <Image className={styles.checkbox} src={check} alt="check"/>}
                {!member.isSelected && <Image className={styles.checkbox} src={uncheck} alt="uncheck"/>}
            </button>
                <button onClick={()=>handleCheck(member.memberId, "isDrinkAlcohol")} className={styles.checkboxContainer}>
                {member.isSelected && member.isTypeAlcohol && member.isDrinkAlcohol &&
                    <Image className={styles.checkbox} src={checkBeer} alt="uncheck"/>
                }
                {member.isSelected && member.isTypeAlcohol && !member.isDrinkAlcohol &&
                    <Image className={styles.checkbox} src={uncheckBeer} alt="uncheck"/>
                }

            </button>

        </div>

    )
)}
</div>
)
}
