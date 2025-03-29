// 실습 :: 버튼 컴포넌트를 만들고 박스 컴포넌트에서 토글버튼이 눌러지면 배경을 해당 색으로 변경

/*
***<< 컴포넌트, probs, state를 통해서 UI를 관리 >>***

:: 컴포넌트와 probs 관점과 state변수를 사용하게 되면 화면이 다시 변하게 된다. 
컴포넌트별로 state가 생기게 된다. state변수를 변경할때 setter를 써야한다
*/



import TailButtonLine from './TailButtonLine';
import MyToggleBox from './MyToggleBox';

export default function MyToggle() {

return (
   // 2개의 MyToggleBox를 그리드 레이아웃으로 배치
  <div className='w-10/12 grid grid-cols-2 gap-4'>

    {/* // MyToggleBox 컴포넌트에 'color' prop을 전달  */}
    {/* // 각 MyToggleBox는 독립적인 state를 가지게 됨 */}
    <MyToggleBox color="blue" />
    <MyToggleBox color="orange" />
  </div>
)
}