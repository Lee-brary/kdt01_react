import TailBall from '../UI/TailBall'
import TailButton from '../UI/TailButton'
import { useState } from 'react'

export default function Lotto() {
    const [lottoTags, setLottoTags] = useState([]) ; 

    const handleLottoNum = () => {

        let lottoNum = [];

        while(lottoNum.length<7) {
          let n = Math.floor(Math.random() * 45) + 1;
        
          //랜덤수를 배열에 넣기
          if(!lottoNum.includes(n)) lottoNum.push(n) ;
        }

        //보너스 번호
        let bonus = lottoNum.splice(-1) ; //맨마지막거 배열로 출력

        //로또 번호 정렬
        lottoNum.sort((a, b) => a - b) ;

        //로또 배열 
        lottoNum = [...lottoNum, '+', ...bonus] //스프레드 연산자(배열) 써도 됨
        
        //   lottoTags = lottoNum (x)
        
        //TailBall 만들기
        let tm = lottoNum.map(item => item === '+'? <span key='n+' className='w-16 h-16 flex mr-5
                                                                    justify-center items-center 
                                                                    text-2xl font-bold'>{item}</span>
                                                    : <TailBall key={'n'+item} n={item}/>
                                                    
        );
            
        setLottoTags(tm) ;
        
        
        console.log('lottoNum', lottoNum, bonus) ;
    }


  return (
    <div className='w-11/12 h-full flex flex-col justify-center items-center'>
     <div className='w-full flex justify-center items-center
                    mb-10'>
        {lottoTags}                
    </div>
    <div>
        <TailButton caption="로또번호생성" color="blue" onClick={handleLottoNum} />
        <TailButton caption="로또번호생성" color="orange" onClick={handleLottoNum} />
    </div>
    </div>
  )
}
