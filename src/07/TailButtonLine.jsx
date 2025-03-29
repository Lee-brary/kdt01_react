
import { MdBorderColor } from 'react-icons/md'
import { ssrModuleExportsKey } from 'vite/module-runner'


// 재사용 가능한 버튼 컴포넌트
// caption, color, onClick을 props로 받아 사용
export default function TailButtonLine({caption, color, onClick}) {
  
    // 버튼 스타일을 위한 객체들
    // 이 컴포넌트는 자체 state를 가지지 않음
   
    // (1) 버튼 테두리 색상 정의
    const border200 = {
        "blue" : "border-blue-200",
        "orange" : "border-orange-200",
        "gray" : "border-gray-200",
    }

    // (2) 버튼 배경 색상 정의
    const bg300 = {
        "blue" : "bg-blue-300",
        "orange" : "bg-orange-300",
        "gray" : "bg-white",
    }

    // (3) 버튼 호버 시 배경 색상 정의
    const bghover = {
        "blue" : "hover:bg-blue-400",
        "orange" : "hover:bg-orange-400",
        "gray" : "",
    }
  
    // props로 받은 값들을 사용하여 동적으로 버튼 렌더링
    return (
    <button className= {`border ${border200[color]} rounded-sm 
                        ${bg300[color]} ${bghover[color]} m-2 p-2
                        ${color !== 'gray' && 'hover:text-white'}`}
                       
                       onClick={onClick}>
      {caption}
    </button>
  )
}
