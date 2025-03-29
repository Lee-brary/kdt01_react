import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'


export default function RouterPage2() {

  const loc = useLocation();
  const [searchParams] = useSearchParams();

  console.log(loc);
  console.log(searchParams);

  let item1 = searchParams.get('item1');
  let item2 = searchParams.get('item2');

  // const item1 = searchParams.get('item1');
  // const item2 = 

  // let tm = loc.search.replace('?', '').split('&');
  // console.log(tm);
  // console.log(loc);


  // let itme1 = tm[0];
  // console.log(itme1).split('=', )

  return (
    <div className='flex h-50 font-bold justify-center items-center'>
      {!item1 ? "page2 메뉴가 선택되었습니다."
              : `${item1}는 ${item2}입니다.`}
    </div>
  )
}
