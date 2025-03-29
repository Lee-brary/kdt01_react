import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Myref() {

    //컴포넌트 변수
    let cnt = 0;

    //state 변수
    const [stCnt, setStCnt] = useState(0);

    //ref 변수
    const refCnt = useRef(0);


    //클릭 이벤트 처리, 컴포넌트 변수 증가
    const handleClick = () => {
        cnt = cnt + 1;
        console.log("cnt = ", cnt)
    }

    //state 변수 증가
    const handleStClick = () => {
        setStCnt(stCnt + 1);
        console.log("stCnt = ", stCnt)
    }

    //Ref 변수 증가
    const handleRefClick = () => {
        refCnt.current = refCnt.current + 1 ;
        console.log("refCnt", refCnt);
    }

    //state 변수 가 변경되었을 때
    useEffect(() => {
        console.log("stCnt = ", stCnt)

    }, [stCnt])
    return (
        <div className='w-full'>
            <div className='w-10/12 grid grid-cols-3 gap-4'>
                <div className='flex justify-center items-end my-5 text-2xl font-bold'>
                    컴포넌트 변수 : {cnt};
                </div>
                <div className='flex justify-center items-end my-5 text-2xl font-bold'>
                    State 변수 : {stCnt}
                </div>
                <div className='flex justify-center items-end my-5 text-2xl font-bold'>
                    Ref 변수 : {refCnt.current}
                </div>
                <TailButton caption="컴포넌트 변수 증가"
                    color="blue"
                    // 함수를 onClick prop에 할당
                    onClick={handleClick} />
                <TailButton caption="컴포넌트 변수 증가"
                    color="blue"
                    onClick={handleClick} />
                <TailButton caption="컴포넌트 변수 증가"
                    color="blue"
                    onClick={handleClick} />
            </div>
        </div>
    )
} 
