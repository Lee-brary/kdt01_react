
import TailButtonLine from '../07/TailButtonLine';
import { useEffect } from 'react'
import { useState } from 'react';

//  *** useEffect(함수, [실행 시점 :: 디펜던시 어레이]) ***

//빈 배열일때는         :: 1. 컴포넌트 생성시 (리액트가) 처음 한 번 실행함.
//state변수가 들어가면  :: 2. 변수가 변경될때마다 함수를 실행함.
//없는 경우             :: 3. 화면에 다시 렌더링일어남. 



export default function MyEffect() {
  
  const [msg, setMsg] = useState('');

  const [color, setColor] = useState("blue");


  const handleClick = () => {
    if (msg === '') setMsg("useEffect 예제: state변수 변경시");
    else setMsg('');
  }

  const handleClickColor = () => {
    setColor(color === "blue" ? "orange" : "blue") ;
  }
  
  
  //  1 :: 컴포넌트 생성시 한번
  useEffect(() => {

    console.log("디펜던시 어레이 []일때 : 컴포넌트 생성시 한 번 실행") ;
    console.log("msg", msg) ;
    console.log("color", color) ;

  }, {});


  //  2 :: 특정 state 값이 변경 될때 마다
  useEffect(() => {
    console.log("state변수의 useeffect msg", msg) ;
    console.log("state변수의 useeffect color", color) ;

    setColor(color === "blue" ? "orange" : "blue")

  }, [msg]) ;


    //  3 :: 어떤 state변수든 변경(화면이 렌더링)이 될때마다 실행
    useEffect(() => {
      console.log("useeffect msg", msg) ;
      console.log("useeffect color", color) ;  
    }) ;


  return (
    <div className='w-full text-2xl font-bold
                    flex flex-col justify-center items-center'>
          <div className='text-3xl font-bold m-2'>
            {msg}
          </div>
          <TailButtonLine caption="useEffect 예제"
                      color={color}
                      onClick={handleClick} />
      <TailButtonLine caption="useEffect 예제"
                      color={color}
                      onClick={handleClickColor} />
    </div>
  )
}
