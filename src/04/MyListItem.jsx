// import React from 'react'

//  1. react라이브러리에서 useState 호출
import  { useState } from "react";

export default function MyListItem({title, imgUrl, content, show}) {
  let cnt = 0 ;

  //  2. useState()
  const [stcnt, setCount] = useState(0) ;

  const handleClick = () => {
    cnt = cnt + 1 ;

    // 3.
    setCount(stcnt + 1 );

    console.log('cnt=', cnt)
  }

  return (
    <div className='flex w-full h-full
                    justify-center items-start
                    p-2 border border-slate-400'>
      <div className='flex w-1/3 m-2'>
        <img src={imgUrl} alt={title}/>
      </div>
      <div className='flex flex-col justify-between
                      p-2 m-2   
                      w-2/3 h-full'>
                        <div>
                            <h1 className='text-xl font-bold'>{title}</h1>
                        </div>
                        <div>
                          <p>{content}</p>
                        </div>
                        <div className='flex justify-end items-center
                                        mx-2
                                        font-bold text-xl'>
                                          
                            <span onClick={handleClick} className="hover:cursor-pointer">💖 좋아요 {cnt}</span>
                      
                        </div>

      </div>
    </div>
  )
}
