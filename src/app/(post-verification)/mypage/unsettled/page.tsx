import BackButton from "@/app/(post-verification)/component/BackButton";
import React from "react";
import Image from "next/image";
import vailedLeftButton from "@/assets/icons/vailedLeftButton.svg";
import unvailedRightButton from "@/assets/icons/unvailedRightButton.svg";
import {faker} from "@faker-js/faker";
import {getDate} from "@/util/dateFormat";


const Borrower1={
    memberId: 4,
    profileImage: faker.image.avatar(),
    nickname: "속석주"
}
const Borrower2={
    memberId: 4,
    profileImage: faker.image.avatar(),
    nickname: "속석주"
}
const Borrower3={
    memberId: 4,
    profileImage: faker.image.avatar(),
    nickname: "속석주"
}
const Borrows=[{
 borrower:Borrower1,
 amount:20000,
 isPayBack:true,
 createdAt:new Date().toString()

},
    {
        borrower:Borrower2,
        amount:40000,
        isPayBack:false,
        createdAt:new Date().toString()

    },
    {
        borrower:Borrower3,
        amount:20000,
        isPayBack:true,
        createdAt:new Date().toString()

    }]
export default function Unsettled(){
    return (

        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-50 p-4">
            <article className="flex justify-between mb-5">
                <BackButton/>
                <p className="font-bold text-lg">미정산 내역</p>
                <div/>
            </article>
            <section className="h-[18%] ">
                {/*년 월 구간*/}
                <div className="w-[50%] flex justify-between mb-5 ">
                    <button><Image src={vailedLeftButton} alt=""/></button>
                    <p className="font-bold text-xl">2024년 3월</p>
                    <button><Image src={unvailedRightButton} alt=""/></button>
                </div>

                <div className="flex">
                    <div className="flex flex-col">
                        대신 내준 금액
                        <p>{Borrows.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()} 원</p>
                    </div>
                    <div>
                        받은 금액
                        <p>{Borrows.filter((borrower) => borrower.isPayBack).reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()} 원</p>
                    </div>
                </div>

                <p className="font-bold text-xl">미정산 건수 {Borrows.filter((borrower) => !borrower.isPayBack).length}</p>
                {Borrows.map((borrower)=>(
                <div className="flex flex-col  h-[100%] justify-between p-4 bg-white rounded-xl shadow-xl mb-3">
                    <div className="flex">
                        <p className="mr-3 text-sm text-gray-500">{getDate(new Date(borrower.createdAt))}</p>
                        { !borrower.isPayBack && <p className="text-red-600 text-bold text-sm">정산 미완료</p>}
                        { borrower.isPayBack && <p className="text-green-500 text-bold text-sm">정산 완료</p>}
                    </div>
                    <div className="flex items-center">
                        <img className="w-[10%] rounded-full mr-3" src={borrower.borrower.profileImage}/>
                        <p className="font-bold">{borrower.borrower.nickname}님에게 받을 돈이 있어요</p>
                    </div>
                    <div className="flex justify-between w-[100%]">
                        <p className="font-bold">{borrower.amount.toLocaleString()} 원</p>
                        {!borrower.isPayBack && <button className="bg-sky-300 rounded-2xl w-[30%] p-1">현금 정산</button>}
                    </div>

                </div>
                ))}
            </section>

        </div>)
}