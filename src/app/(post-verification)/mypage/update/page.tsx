import BackButton from "@/app/(post-verification)/component/BackButton";
import {faker} from "@faker-js/faker";
import circlePen from "@/assets/icons/circlepen.svg"
import pen from "@/assets/icons/pen.svg"
import Image from "next/image";
import dropUp from "@/assets/icons/dropup.svg"
import dropDown from "@/assets/icons/dropdown.svg"

const Me = {
    memberId: 1,
    profileImage: faker.image.avatar(),
    nickname: '함승찬짱',
    phoneNumber: '010-2839-1132'
}

export default function Update() {
    return (<div className="absolute top-0 right-0 bottom-0 left-0 bg-white z-5 p-4">
        <article className="flex justify-between mb-5">
            <BackButton/>
            <p className="font-bold text-lg">계정관리</p>

            <div/>
        </article>

        <section className="flex flex-col justify-center items-center ml-[7%]">
            <img className="w-[20%] rounded-2xl" src={Me.profileImage}/>
            <Image className="relative bottom-6 left-9 w-[12%] cursor-pointer" src={circlePen} alt=""/>
        </section>

        <section className="h-[30%]">
            <hr/>
            <div className="flex h-[20%] mt-2">
                <p className=" w-[12%] mr-3 text-gray-400 text-xs">닉네임</p>
                <div className="flex w-[90%] justify-between">
                    <p className="flex items-center">{Me.nickname}</p>
                    <Image src={pen} alt={""}/>
                </div>
            </div>
            <hr/>
            <hr/>
            <div className="flex h-[20%] mt-2">
                <p className=" w-[12%] mr-3 text-gray-400 text-xs">전화번호</p>
                <p className="flex items-center">{Me.phoneNumber}</p>
            </div>
            <hr/>
        </section>

        <section className="flex flex-col justify-center">
            <button className="flex justify-between">
                <div/>
                <div className="mb-3">고급 설정</div>
                <div>
                    <Image src={dropUp} width={15} height={15} alt=""/>
                    <Image src={dropDown} width={15} height={15} alt=""/>
                </div>
            </button>
            <button className="p-3 mb-3 bg-gray-200 rounded-lg">간편 결제 비밀번호 변경</button>
            <button className="p-3 mb-3 bg-gray-200 rounded-lg">로그아웃</button>
            <button className="p-3 mb-3 bg-gray-200 rounded-lg">회원 탈퇴</button>
        </section>
    </div>);
}