import React from 'react'
import { useParams } from 'react-router-dom'

export default function RouterPage1() {
  
  const { item1, item2 } = useParams();
  
  return (
    <div className='flex h-50 font-bold justify-center items-center'>
      { item1 == "menu" ? "page1 메뉴가 선택되었습니다."
                        : `${item1}는 ${item2}입니다.` }
    </div>
  )
}
