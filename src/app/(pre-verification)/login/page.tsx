import {useRouter} from "next/navigation";
import KakaoSocialButton from "@/app/(pre-verification)/component/KakaoSocialButton";
import piepaylogo from "@/assets/icons/piepaylogo.svg";
import * as styles from "@/styles/login/login.css";
import Image from "next/image";

export default function Login() {
    // const router = useRouter();
    //
    // const onClickButton = (path:string)=>{
    //     if(path==="main") router.push("/")
    //     if(path==="auth") router.push("/auth")
    // }
  return (
      <div className={styles.container}>
          <Image className={styles.logo} src={piepaylogo} alt='piepay logo'/>
            <br/>
          <KakaoSocialButton />
      </div>
  );
}
