import busan from '../assets/busan.png';
import bank from '../assets/bank.png';
import market from '../assets/market.png'
import { useState } from 'react';


export default function FoodCard({obj}) {
    console.log("FoodCard", obj)
    const [Isshow, setIsshow] = useState(false);

    // 요소들을 따로 빼서 정리 // includes등 활용 가능
    const imgGubun  = {
        "광역지원센터" : busan, 
        "기초푸드뱅크" : bank,
        "기초푸드마켓" : market,
      }

    //1. 삼항연산자
    /*{ <img src={obj["구분"] == "광역지원센터" ? busan 
                  : obj["구분"] == "기초푸드뱅크" ? bank : market} alt={obj["구분"]}  */
    
    //2. 삼항연산자
    /*const image = 
         obj["구분"] == "광역지원센터" ? busan
                                    : obj["구분"] == "기초푸드뱅크" ? bank : market ;
    */

    const handleShow = () => {
        //console.log(`전화번호는 ${obj["연락처(대표번호)"]} 입니다.`) ;
        setIsshow(!Isshow);
    }

    return (
        <div className='flex w-full h-64
                    justify-center items-start
                    p-2 border border-slate-400'>
            <div className='flex w-1/3 h-full justify-center items-center'>
                <img src={imgGubun[obj["구분"]]} alt={obj["구분"]} />
            </div>

            <div className='flex flex-col justify-between
                      p-2 m-2   
                      w-2/3 h-full'>
                <div>
                    <h2 className='text-xl font-bold mb-2'>{obj.사업장명}</h2>
                </div>
                <p className='mb-2'>{obj.구분}</p>
                <p className='mb-2'>{obj.운영주체명}</p>
                <p className='mb-2'>{obj["사업장 소재지"]}</p>
                <div onClick={handleShow} className="h-1/6 hover:cursor-grab
                                                            bg-slate-700
                                                            text-white font-bold
                                                            flex justify-center items-center">
                    {Isshow && `홈 : ${obj["연락처(대표번호)"]},  펙스 : ${obj["팩스번호"]}`}</div>

            </div>
        </div>
    )
}
