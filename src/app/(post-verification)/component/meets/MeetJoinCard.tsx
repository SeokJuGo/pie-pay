import * as styles from "@/styles/main/cardLayout.css";
import MeetJoin from "./MeetJoin";

export default function MeetJoinCard() {
    return (
        <div className={styles.cardLayout.joinMeetGroup}>
            <MeetJoin />
        </div>
    );
}