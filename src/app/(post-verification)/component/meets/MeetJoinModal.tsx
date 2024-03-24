"use client";

import * as styles from "@/styles/main/mainModal.css";
import MeetJoin from "./MeetJoin";
import {useEffect, useState} from "react";

interface MeetJoinModalProps{
    isJoinModalOn: boolean;
    clickJoinModal: ()=>void;
    clickExitModal: ()=>void;
}

export default function MeetJoinModal({ isJoinModalOn, clickJoinModal, clickExitModal }: MeetJoinModalProps) {
    const [modalOn, setModalOn] = useState(false);
    const [startY, setStartY] = useState(0);
    const [currentY, setCurrentY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [modalY, setModalY] = useState(-60);

    useEffect(() => {
        setModalOn(isJoinModalOn);
        if(isJoinModalOn)setModalY(0);
    }, [isJoinModalOn]);

    const closeModal = () => {
        console.log('closeModal');
        setModalY(-60);
        setModalOn(false);
        clickExitModal();
    };

    const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('start mouse', dragging);
        setDragging(true);
        setStartY(e.clientY);
        setCurrentY(e.clientY);
    }

    const handleDragStartTouch = (e: React.TouchEvent<HTMLDivElement>) => {
        setDragging(true);
        const touch = e.touches[0];
        setStartY(touch.clientY);
        setCurrentY(touch.clientY);
    }

    const handleDragging = (e: React.MouseEvent) => {
        if (dragging) {
            setCurrentY(e.clientY);
            const diff = (startY - currentY)/window.innerHeight*100;
            setModalY(diff);
        }
    }

    const handleDraggingTouch = (e: React.TouchEvent) => {
        if (dragging) {
            const touch = e.touches[0];
            setCurrentY(touch.clientY);
            if (startY - currentY < 0) {
                const diff = (startY - currentY)/window.innerHeight*100;
                setModalY(diff);
            }
        }
    }

    const handleDragEnd = () => {
        setDragging(false);
        const diff = (startY - currentY)/window.innerHeight*100;
        if (diff < -20) {
            closeModal();
        } else {
            setModalY(0);
        }
        setStartY(0);
        setCurrentY(0);
    }

    const handleClickJoin = () => {
        closeModal();
        clickJoinModal();
    }

    return (
        <>
            <div
                className={`${styles.modalLayout.joinMeetModal} ${modalOn && styles.modalOn}`}
                onMouseMove={handleDragging}
                onMouseUp={handleDragEnd}
                onTouchEnd={handleDragEnd}
                onTouchMove={handleDraggingTouch}
                style={modalY>=-60 ? {bottom: `${modalY}%`} : {bottom: 0}}
            >
                <div className={styles.modalHandleArea} onMouseDown={handleDragStart} onTouchStart={handleDragStartTouch}>
                    <div className={`${styles.modalHandle} ${dragging && styles.modalHandleActive}`}></div>
                </div>
                <div className={styles.modalContentLayout}>
                    <MeetJoin
                        isModal={true}
                        clickJoin={handleClickJoin}
                        clickExit={closeModal}
                    />
                </div>
            </div>
            <section
                className={`${styles.modalBackground} ${modalOn && styles.modalBackgroundOn}`}
                onClick={closeModal}
            >
            </section>
        </>
    );
}