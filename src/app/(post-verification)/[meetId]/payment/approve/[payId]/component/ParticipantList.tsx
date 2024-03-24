'use client'

import * as styles from "@/styles/payment/agree/participantList.css";
import {useMemberFilter} from "@/store/useMemberFilter";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {getPayment} from "@/api/payment";
import {useEffect, useState} from "react";
import {Participant, Participants} from "@/model/participant";
import ProgressSpiner from "@/app/(post-verification)/component/ProgressSpiner";

type Props= {
    payId:string;
}
export default function ParticipantList({payId}:Props) {

    const queryClient = useQueryClient();
    const payment: Participants |undefined = queryClient.getQueryData(['payment',payId]) ;
    const [participants, setParticipants] = useState<Participant[]>([]);
    useEffect(() => {
        if(!payment) return;
        setParticipants(payment?.participants);
    }, []);
    return (

        <div className={styles.participantContainer}>
            {participants.map(participant => (
                    <div key={participant.participantId}
                         className={`${styles.container}  ${participant.payAgree == "agree" && styles.backgroundSkyBlue}`}>
                        <div className={styles.participantList}>
                            <img className={styles.image} src={participant.memberInfo.profileImage} alt="" width={50}/>
                            <p>{participant.memberInfo.nickname}</p>

                        </div>
                        {participant.payAgree=="await" && <ProgressSpiner/>}

                    </div>

                )
            )}
        </div>
    )
}
