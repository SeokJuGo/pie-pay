import Link from "next/link";
import Image from "next/image";
import kakao from "@/assets/icons/kakao.svg"
import * as styles from "@/styles/login/kakaoButton.css";

const redirectURL = `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/auth`
const URL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/oauth2/authorization/kakao?redirect_uri=${redirectURL}`

export default function KakaoSocialButton() {
  return (
    <Link className={styles.kakaoButton} href={URL}>
        <Image src={kakao} width={24} height={24} alt='button'/>
        <p className={styles.kakaoTitle}>카카오 로그인</p>
    </Link>
  );
}