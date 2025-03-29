import React, { useState, useEffect, useRef } from 'react'
import TailCard from '../UI/TailCard'
import TailButton from '../UI/TailButton';

export default function Gallery() {

  const [tdata, setTdata] = useState([]);
  const [cards, setCards] = useState([]);
  const inRef = useRef();

  const getFetchData = () => {
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
    url = `${url}serviceKey=${import.meta.env.VITE_APP_API_KEY}`;
    url = `${url}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`
    url = `${url}keyword=${encodeURI(inRef.current.value)}&_type=json` ;

    console.log(url) ;

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setTdata(data.response.body.items.item);
        })
      .catch(err => console.error(err)) ;
  }

  const handleOK = (e) => {
    console.log("handleOk")
    e.preventDefault() ;

    if(inRef.current.value == '') {
      alert('키워드를 입력하세요.') ;
      inRef.current.focus();
      return ;
    }

    getFetchData() ;
  }

  const handleClear = () => {

  }

  useEffect(() => {
    inRef.current.focus() ;

  }, [])

  useEffect(() => {
    if (tdata.length == 0) return ;
    let tm = tdata.map((item) => 
                                <TailCard
                                title = {item.galTitle}
                                subtitle  = {item.galPhotographyLocation}
                                imgurl  = {item.galWebImageUrl}
                                kw  = {item.galSearchKeyword}
                                key={item.galContentId} />
    );
    setCards(tm) ;
  }, [tdata])

  return (
    <div className='w-full flex flex-col justify-start items-start'>
      <form className='w-10/12 h-24 flex justify-center items-center'>
        <div>
        <input type="text" className='form-input rounded w-full border p-2'
          ref = {inRef}
        />
        </div>
        <div>
          <TailButton
            caption={"확인"}
            color="blue"
            onClick={handleOK} />

          <TailButton
            caption={"취소"}
            color="blue"
            onClick={handleClear} />

        </div>
      </form>
      <div className='w-10/12 grid grid-cols-1
                      md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {cards}
      </div>
    </div>
  )
}
