import BackButton from "@/app/(post-verification)/component/BackButton";

export default function Header(){
    return(
        <div className="fixed top-0 flex items-center w-[37%] mt-5 z-50">
            <BackButton/>
            <p className="font-bold ml-3"> 게임</p>
        </div>

    );
}