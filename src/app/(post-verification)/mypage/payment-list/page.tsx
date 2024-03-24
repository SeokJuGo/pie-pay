'use client'

import BackButton from "@/app/(post-verification)/component/BackButton";
import vailedRightButton from "@/assets/icons/vailedRightButton.svg"
import unvailedRightButton from "@/assets/icons/unvailedRightButton.svg"
import vailedLeftButton from "@/assets/icons/vailedLeftButton.svg"
import unvailedLeftButton from "@/assets/icons/unvailedLeftButton.svg"
import dropUp from "@/assets/icons/dropup.svg"
import dropDown from "@/assets/icons/dropDown.svg"
import Image from "next/image";
import {faker} from "@faker-js/faker";
import {getDate} from "@/util/dateFormat"
import React from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2"
import {useReceiptModal} from "@/store/useReceiptModal";

ChartJS.register(ArcElement, Tooltip, Legend);

const Meet = {
    meetId: 1,
    meetName: '갈까마귀모임',
    meetImage: faker.image.avatar(),
    memberCount: 5,
}

const Receipt = {
    payId: 1,
    storeName: '(주) 뽕족 강남점',
    totalAmount: 40500
}
const Payments = [
        {
            createAt: new Date().toString(),
            meet: Meet,
            receipt: Receipt
        },
        {

            createAt: new Date().toString(),
            meet: Meet,
            receipt: Receipt
        }
        ,
        {

            createAt: new Date().toString(),
            meet: Meet,
            receipt: Receipt
        }
        , {

            createAt: new Date().toString(),
            meet: Meet,
            receipt: Receipt
        }]



export default function PaymentList() {
    const {isVisible,updateState} = useReceiptModal();
    const data = {
        labels: ["갈까마귀모임", "SSAFY특화프로젝트", "고향 친구들"],
        datasets: [
            {
                label: "test",
                data: [12, 19, 3],
                backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
                borderWidth: 1,
            },
        ],
    };

    return (

        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50 p-4">
            <article className="flex justify-between mb-5">
                <BackButton/>
                <p className="font-bold text-lg">결제내역</p>
                <div/>
            </article>
            <section className="mb-5">
                <div className="w-[50%] flex justify-between">
                    <button><Image src={vailedLeftButton} alt=""/></button>
                    <p className="font-bold text-xl">2024년 3월</p>
                    <button><Image src={unvailedRightButton} alt=""/></button>
                </div>
                <div className="h-[80%] flex flex-col items-center p-1 bg-white shadow-xl rounded-xl">
                    <div className="">
                        <Doughnut data={data} />
                    </div>
                    <div className="flex justify-around w-[40%]">
                        <p>총 금액</p>
                        <p className="font-bold">180000원</p>
                        <p>원</p>
                    </div>

                </div>
            </section>


            <section>
                <div className="flex justify-between">
                    <p className="font-bold text-lg">결제 건수 4</p>
                    <div className="flex items-center">
                        <Image src={dropDown} width={15} height={15} alt=""/>
                        <p className="text-sm ml-2 text-gray-500">최신순</p>
                    </div>
                </div>
                {Payments.map((payment)=>(
                <div className="flex flex-col h-[100%] justify-between p-4 bg-white rounded-xl shadow-xl mb-3">
                    <div className="flex mb-3">
                        <p className="mr-3 text-sm text-gray-500">{getDate(new Date(payment.createAt))}</p>
                        <p className="text-green-600 text-sm">정산 완료</p>
                    </div>
                    <div className="flex flex-col mb-3">
                        <p className="font-bold text-gray-500 text-xs">{payment.meet.meetName} {payment.meet.memberCount}명</p>
                        <p className="font-bold text-lg">{payment.receipt.storeName}</p>
                    </div>
                    <div className="flex justify-between w-[100%]">
                        <p className="text-lg font-bold">{payment.receipt.totalAmount.toLocaleString()} 원</p>
                        <button onClick={updateState} className="w-[30%] bg-sky-300 rounded-xl text-xs">영수증 확인</button>
                    </div>

                </div>
                ))}
                <div>

                </div>
            </section>
        </div>

    );
}