import {Dummy} from "../../page";
import * as styles from "@/styles/main/cardLayout.css";
import * as fontCss from "@/styles/fonts.css";
import StarIcon from "@/app/(post-verification)/component/icons/StarIcon";
import moreDots from "@/assets/icons/moreDots.svg";
import theme from "@/styles/theme/theme";
import Image from "next/image";


interface MeetMember {
    memberId: number;
    nickname: string;
    profileImage:string;
}


export default function MeetGroup(props : {dummy: Dummy}){
    const { dummy } = props;
    return (
        <>
            <div className={styles.cardLayout.meetGroup}>
                <div className={styles.lineLayout.lineOne}>
                    <div className={styles.meetInfo}>
                        <div className={styles.meetImageContainer}>
                            <img className={styles.meetImage} src={dummy.meetImage} alt="meet image" width={40} height={40}/>
                        </div>
                        <div className={styles.meetInfoString}>
                            <h3 className={`${styles.meetName} ${fontCss.semibold}`}>{dummy.meetName}</h3>
                            <p className={styles.meetDate}>{dummy.meetDate}</p>
                        </div>
                    </div>
                    <div>
                        <StarIcon color={dummy.favorite ? theme.yellow : theme.lightGray} />
                    </div>
                </div>
                <div className={styles.lineLayout.lineTwo}>
                    <div className={styles.profileImageContainer}>
                        {dummy.meetMembers.slice(0, 5).map((member: MeetMember) => {
                            return (
                                <img
                                    className={styles.meetMemberImage}
                                    src={member.profileImage}
                                    alt="member image"
                                    width={24} height={24}
                                    key={member.memberId}
                                />
                            )
                        })}
                        {dummy.meetMembers.length > 5 ?
                            <>
                                <Image src={moreDots} alt="dots" width={32} height={32} />
                                <p className={`${styles.meetMemberNumber} ${fontCss.semibold}`}>{'+' + (dummy.meetMembers.length - 5)}</p>
                            </>
                            : <></>
                        }
                    </div>
                    <button className={`${styles.cardButton.paymentButton} ${fontCss.semibold}`}>바로 결제</button>
                </div>
            </div>
        </>
    );
}