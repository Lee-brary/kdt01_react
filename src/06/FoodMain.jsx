import { useState } from 'react';
import FoodCard from './FoodCard';
import fooddata from './fooddata.json';
import Tailbutton from '../UI/TailButton'

export default function FoodMain() {

  //console.log("FoodMain", fooddata)
  const [tags, setTags] = useState([]);

  let category = fooddata.map(item => item['운영주체 분류'].replaceAll(' ', ''));
  category = [...new Set(category)]; // 배열로 넣어준다
  console.log(category);

  const handleCategory = (c) => {
    console.log("handleCategory", c);


    //배열로 받은 것을 테그로 출력
    let tm = fooddata.filter((item) => item['운영주체 분류'].replaceAll(' ', '') == c) ;
   

    
    const tg = tm.map(item => <FoodCard 
                                key={tm["사업장명"]}
                                obj={item} />)  
   

    setTags(tg);
  }

  //버튼을 컴포넌트화해서 통일성 가짐
  //카테고리 분류해서 선택한 것만 출력하려면 filter

  const btn = category.map(item =>
                                  <Tailbutton
                                    key={item}
                                    caption={item}
                                    color="blue"
                                    onClick={() => handleCategory(item)}
                                    />
  );


  return (
    <div className='w-11/12'>
      <div className='w-full h-1/4 flex items-center justify-center rounded-sm'>
        {btn}
      </div>
      <div className='w-full h-10 my-10 grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-sm border-black'>
        {tags}
      </div>
    </div >
  )
}
