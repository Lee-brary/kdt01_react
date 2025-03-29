import React, { useState } from 'react'
import TailButtonLine from './TailButtonLine'

// color prop을 받아 사용하는 컴포넌트
export default function MyToggleBox({color}) {

     // 토글 상태를 관리하는 state
     // isToggle state 선언. 이 state가 변경되면 컴포넌트가 리렌더링됨
    const[isToggle, setToggle] = useState(false);

    // 토글 시 적용될 배경 색상 정의
    const bg700 = {
        "blue": "bg-blue-700",
        "orange": "bg-orange-700",
    }

    // 토글 상태를 변경하는 함수
    // state를 변경하는 함수. setter(setToggle)를 사용하여 state 업데이트
    const handleToggle = () => {
        setToggle(!isToggle);  // 현재 state의 반대값으로 설정
    }

    return (
        // isToggle state에 따라 동적으로 클래스 적용

        // 토글 상태에 따라 배경색 변경
        <div className={`w-10/12 flex flex-col p-5
                        ${isToggle ? bg700[color] : ''}`}>
            
            {/* 색상 이름을 표시하는 버튼 */}
            {/* TailButtonLine 컴포넌트에 props 전달 */}
            <TailButtonLine 
            caption={`${color}`}
            color="gray"
            onClick={() => {}}/>

            {/* 토글 기능을 하는 버튼 */}
            {/* 토글 기능을 하는 버튼. onClick prop으로 handleToggle 함수 전달 */}
            <TailButtonLine 
            caption={`${color} Toggle`}
            color={color}
            onClick={handleToggle}/>
        </div>
    )
}
