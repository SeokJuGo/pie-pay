'use client'

import {faker} from "@faker-js/faker";
import setting from "@/assets/icons/setting.svg"
import Image from "next/image";
import BankAccount from "@/app/(post-verification)/component/BankAccount";
import React from "react";
import addAccount from "@/assets/icons/addaccount.svg";
import {useRouter} from "next/navigation";
import {getDate} from "@/util/dateFormat"
const Me = {
    memberId: 1,
    profileImage: faker.image.avatar(),
    nickname: '함승찬짱',
    phoneNumber: '010-2839-1132'
}
const Borrower = {
    memberId: 5,
    profileImage: faker.image.avatar(),
    nickname: '속석주'
}
const UnsettledBox = {
    createAt: new Date().toString(),
    Borrower: Borrower,
}
const Meet = {
    meetId: 1,
    meetName: '갈까마귀모임',
    meetImage: faker.image.avatar()
}

const Receipt = {
    payId: 1,
    storeName: '(주) 뽕족 강남점',
    totalAmount: 40500
}
const Payment = {
    createAt: new Date().toString(),
    meet: Meet,
    receipt: Receipt
}





export default function MyPage() {
    const route =useRouter();

    const updateMember = () => route.push('mypage/update');

    return (
        <div className="w-[100%] h-[100%] flex flex-col justify-around">
            <section className="w-[100%] h-[13%] flex justify-between p-3 bg-white rounded-2xl ">
                <div className="flex items-center mb-3">
                    <img className="h-[3rem] mr-3 rounded-lg" src={Me.profileImage}/>
                    <div className="flex flex-col">
                        <p className="font-bold ">{Me.nickname}</p>
                        <p className="text-xs text-gray-500">{Me.phoneNumber}</p>
                    </div>
                </div>
                <div>
                    <Image onClick={updateMember} className="cursor-pointer" src={setting} alt="톱니바퀴"/>
                </div>
            </section>
            <section>
                <p className="font-bold mb-2">내 계좌 1</p>
                <div className="flex justify-between">
                    <div className="w-[80%]">
                        <BankAccount/>
                    </div>
                    <div className="flex flex-col bg-sky-300 rounded-2xl p-2 justify-center items-center ">
                        <Image src={addAccount} alt=""/>
                        <p className="mt-2 text-blue-700 text-xs">계좌 추가</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="flex justify-between">
                    <p className="font-bold mb-2 text-lg">미정산 내역</p>
                    <p className="text-gray-500 text-xs">더 보기</p>
                </div>
                <div className="flex flex-col  h-[80%] justify-between p-4 bg-white rounded-xl shadow-xl">
                    <div className="flex">
                        <p className="mr-3 text-sm text-gray-500">{getDate(new Date(UnsettledBox.createAt))}</p>
                        <p className="text-red-600 text-sm">정산 미완료</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-[10%] rounded-full mr-3" src={UnsettledBox.Borrower.profileImage}/>
                        <p className="font-bold">{UnsettledBox.Borrower.nickname}님에게 받을 돈이 있어요</p>
                    </div>
                    <div className="flex justify-end w-[100%]">
                        <button className="bg-sky-300 rounded-2xl w-[30%] p-1">현금 정산</button>
                    </div>

                </div>
            </section>
            <section>
                <div className="flex justify-between mb-2">
                    <p className="font-bold text-lg">결제 내역</p>
                    <p className="text-gray-500 text-xs">더 보기</p>
                </div>
                <div className="flex flex-col h-[100%] justify-between p-4 bg-white rounded-xl shadow-xl">
                    <div className="flex">
                        <p className="mr-3 text-sm text-gray-500">{getDate(new Date(Payment.createAt))}</p>
                        <p className="text-green-600 text-sm">정산 완료</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-bold text-sm">{Payment.meet.meetName}</p>
                        <p className="font-bold text-lg">{Payment.receipt.storeName}</p>
                    </div>
                    <div className="flex justify-end w-[100%]">
                        <p className="text-lg font-bold">{Payment.receipt.totalAmount.toLocaleString()} 원</p>
                    </div>

                </div>
            </section>

        </div>);
}