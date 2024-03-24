"use client";

import * as styles from "@/styles/main/cardLayout.css";
import * as fontCss from "@/styles/fonts.css";
import * as buttonStyles from "@/styles/main/mainButton.css";
import {useState, useRef} from "react";

interface MeetJoinProps{
    isModal?: boolean;
    clickJoin?: () => void;
    clickExit?: () => void;
}

export default function MeetJoin({ isModal = false, clickJoin, clickExit }: MeetJoinProps ) {
    const [code, setCode] = useState<string[]>(Array(6).fill(''));
    const [isWrong, setIsWrong] = useState<boolean[]>(Array(6).fill(false));
    const [isComplete, setIsComplete] = useState<boolean[]>(Array(6).fill(false));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const placeholder: string = 'piepay'

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value.charAt(0); // 첫 번째 글자만 취함
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        const isValid = /^[a-zA-Z0-9]$/.test(value); // 한 글자에 대한 검증만 수행
        const newIsWrong = [...isWrong];
        newIsWrong[index] = !isValid;
        setIsWrong(newIsWrong);

        const newIsComplete = [...isComplete];
        newIsComplete[index] = isValid;
        setIsComplete(newIsComplete);

        if (value === '') {
            newIsWrong[index] = false;
            setIsWrong(newIsWrong);

            newIsComplete[index] = false;
            setIsComplete(newIsComplete);
        }

        if (isValid && index < code.length - 1) {
            inputRefs.current[index + 1]?.focus(); // 유효하다면 다음 필드로 포커스 이동
        }
    }
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && code[index] === '') {
            if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    }
    const onClick = () => {
        if (code.every(val => /^[a-zA-Z0-9]+$/.test(val))) {
            console.log(code.join('').toLowerCase());
        }
    }
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(code)
        if (code.every(val => /^[a-zA-Z0-9]+$/.test(val))) {
            console.log(code.join('').toLowerCase());
        }
    }

    const onClickExit = () => {
        if (clickExit) {
            clickExit();
        }
    }

    const onClickJoin = () => {
        if (code.every(val => /^[a-zA-Z0-9]+$/.test(val))) {
            console.log(code.join('').toLowerCase());
            if (clickJoin) {
                clickJoin();
            }
        }
    }

    return(
        <>
            <h3 className={fontCss.bold}>초대 코드로<br/>모임에 참여해보세요</h3>
            <p>초대 코드는 알파벳과 숫자 6자리에요</p>
            <form
                className={styles.lineLayoutJoin.lineTwo}
                onSubmit={(e) => onSubmit(e)}
            >
                <section className={styles.codeContainer}>
                    {code.map((val, index) => (
                        <div className={styles.codeBox} key={index}>
                            <input
                                ref={el => inputRefs.current[index] = el}
                                value={code[index]}
                                className={styles.codeInput}
                                onChange={(e) => onChange(e, index)}
                                onKeyDown={(e) => onKeyDown(e, index)}
                                placeholder={placeholder[index]}
                            />
                            <div className={`${styles.codeUnderline} ${isWrong[index] && styles.wrong} ${isComplete[index] && styles.right}`}></div>
                        </div>
                    ))}
                </section>
                <p className={`${styles.wrongMessage} ${fontCss.semibold} ${!isWrong.includes(true) && styles.none}`}>
                    알파벳, 숫자만 입력할 수 있어요
                </p>
            </form>
            <div className={isModal ? styles.lineLayoutJoin.lineThreeModal : styles.lineLayoutJoin.lineThree}>
                {isModal &&
                    <button
                        className={`${styles.modalExitButton} ${fontCss.semibold}`}
                        onClick={onClickExit}
                    >취소하기</button>
                }
                {isModal ?
                    <button
                        className={`
                        ${isComplete.every(value => value) ? buttonStyles.mainButton.modalButton : buttonStyles.mainButton.modalButtonDisabled}
                        ${fontCss.semibold}
                        `}
                        onClick={onClickJoin}
                    >
                        모임 참여하기
                    </button>
                    :
                    <button
                        className={`
                        ${isComplete.every(value => value) ? styles.cardButton.joinButton : styles.cardButton.joinButtonDisabled}
                        ${fontCss.semibold}
                        `}
                        onClick={onClick}
                    >참여하기
                    </button>
                }
            </div>
        </>
    );
}