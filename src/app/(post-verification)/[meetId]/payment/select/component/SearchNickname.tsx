import * as styles from "@/styles/payment/select/searchNickname.css";
import Image from "next/image";
import search from "@/assets/icons/search.svg";
import {useMemberFilter} from "@/store/useMemberFilter";

export default function SearchNickname() {
    const {handleSearchNickname} = useMemberFilter();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearchNickname(event.target.value);
    };

    return (
        <div className={styles.search}>
            <Image src={search} alt="search"/>
            <input
                placeholder="닉네임 검색"
                className={styles.input}
                onChange={handleChange}
            />
        </div>
    );
}