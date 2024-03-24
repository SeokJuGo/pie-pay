import NotificationMessage from "@/app/(post-verification)/component/NotificationMessage";
import * as styles from "@/styles/notification/notification.css"

export default function Alarm() {
  return <div className={styles.container}>

    <div className={styles.paragraph}>알림</div>
    <NotificationMessage/>

  </div>;
}
