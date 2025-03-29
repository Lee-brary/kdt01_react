import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react";

export default function Myref() {

    const [result, setResult] = useState(0);

    //ref 변수 선언
    const refInput1 = useRef();
    const refInput2 = useRef();
    const refResult1 = useRef();
    const refSelect = useRef();

    //계산
    const handleCal = (e) => {
        e.preventDefault();


        //입력 공백 체크
        if (refInput1.current.value == '') {
            alert("첫번째 값을 입력하세요.")
            refInput1.current.focus();
            return;
        }
            
        if (refInput2.current.value == '') {
            alert("두번째 값을 입력하세요.")
            refInput2.current.focus();
            return;
            }
        

        const num1 = parseInt(refInput1.current.value);
        const num2 = parseInt(refInput2.current.value);


        switch (refSelect.current.value) {
            case "+":
                refResult1.current.value = (num1 + num2);
                break;

            case "-":
                refResult1.current.value = (num1 - num2);
                break;

            case "*":
                refResult1.current.value = (num1 * num2);
                break;

            case "/":
                refResult1.current.value = (num2 != 0 ? num1 / num2 : "0으로는 나누지 못합니다.");
                break;

            default:
                setResult("숫자를 넣어주세요.");
        }

        //요소의 값을 가져오기 current.value

    }

    //입력 초기화
    const handleInit = () => {

        refInput1.current.value = '';
        refInput2.current.value = '';
        refResult1.current.value = '';
        refSelect.current.value = '+';
    }

    useEffect(() => {
        refResult1.current.value = result;
    }, [])

    //컴포넌트 생성시 입력상자에 초기 포커스 설정
    useEffect(() => {
        refInput1.current.focus();
    }, [])


    return (
        <div className="w-full flex justify-center items-start mt-10">
            <div className="w-10/12 flex justify-center items-center bg-gray-100 p-5">
                <form className="w-3/5 grid grid-cols-5 gap-4">
                    <input type="number" id="txt1"
                        ref={refInput1}
                        onFocus={handleInit}
                        className="bg-gray-50 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
                    <select id="sel"
                        ref={refSelect}
                        className="bg-gray-50 border border-gray-300
                       text-gray-900 text-lg rounded-lg text-center
                       focus:ring-blue-500 focus:border-blue-500 
                       block w-full p-2">
                        <option value="+" defaultValue>+</option>
                        <option value="-">-</option>
                        <option value="*">x</option>
                        <option value="/">/</option>
                    </select>
                    <input type="number" id="txt2"
                        ref={refInput2}
                        className="bg-gray-50 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
                    <TailButton caption="="
                        color="blue"
                        onClick={handleCal} />
                    <input type="number" id="txt2" readOnly
                        ref={refResult1}
                        className="bg-gray-100 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
                </form>
            </div>

        </div>
    )
} 
