import React from 'react'
import { useState, useEffect } from 'react'



export default function BoxOffice() {

    //화면에 랜더링 될 상태 변수
    const [tags, setTags] = useState([]);

    //선택된 영화 정보 표시
    const [selectedMovie, setSelectedMovie] = useState();

    //날짜 변경 헨들링
    const [selectedDate, setSeletedDate] = useState();
    const handleDateChange = (e) => {
        setSeletedDate(e.target.value);
    }

    


    //어제 날짜 가져오기
    const getYesterday = () => {
        let dt = new Date();
        dt.setDate(dt.getDate() - 1);

        //년도
        let year = dt.getFullYear();

        //월
        let month = String(dt.getMonth() + 1).padStart(2, '0');
        // month = month < 10 ? '0' + month : month ;

        //일 
        let day = String(dt.getDate()).padStart(2, '0');

        return (year + '-' + month + '-' + day);
    }

    //fetch할 함수, 일일 박스오피스 정보 가져오기
    const getFetchData = async (date) => {

        const mvApiKey = import.meta.env.VITE_APP_MV_KEY;
        let dt = date.replaceAll('-', '');

        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
        url = `${url}key=${mvApiKey}&targetDt=${dt}`;

        const resp = await fetch(url);
        const data = await resp.json();

        let boxList = data.boxOfficeResult.dailyBoxOfficeList;
        console.log(boxList);

        setTags(boxList);

    }

    //컴포넌트가 실행될때 한번 fetch
    useEffect(() => {

        getFetchData(selectedDate);

    }, [selectedDate]);


    const getRankChange = (rankInten) => {

        const intRankInten = parseInt(rankInten);

        if (intRankInten > 0) return `🔺${intRankInten}`;
        if (intRankInten < 0) return `🔻${intRankInten}`;
        return '-';
    }

    // 테이블 행이 클릭될 때 함수 호출
    // 클릭된 영화 객체를 selectedMovie 상태에 저장.
    const handleClick = (movie) => {
        setSelectedMovie(movie);
    }

    return (
        // 날짜 선택 input type date
        <div>
            <span className='p-5'>
                순위 조회 날짜 
            </span>
            <input type="date" value={selectedDate} onChange={handleDateChange} max={getYesterday()} className='mb-4 p-2 border rounded'/>
       
        <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">순위</th>
                        <th className="px-6 py-3">영화명</th>
                        <th className="px-6 py-3">매출액</th>
                        <th className="px-6 py-3">관객수</th>
                        <th className="px-6 py-3">누적 매출액</th>
                        <th className="px-6 py-3">누적 관객수</th>
                        <th className="px-6 py-3">순위 변동</th>
                    </tr>
                </thead>
                <tbody>
                    {tags.map((movie, index) => (
                        <tr key={index} className="cursor-pointer hover:font-black bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                            onClick={() => handleClick(movie)}>

                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                {movie.rank}
                            </td>
                            <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                {movie.movieNm}
                            </td>
                            <td scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
                                {parseInt(movie.salesAmt).toLocaleString()}원
                            </td>
                            <td className="px-6 py-4">
                                {parseInt(movie.audiCnt).toLocaleString()}명
                            </td>
                            <td className="px-6 py-4">
                                {parseInt(movie.salesAcc).toLocaleString()}원
                            </td>
                            <td className="px-6 py-4">
                                {parseInt(movie.audiAcc).toLocaleString()}명
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{getRankChange(movie.rankInten)}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {selectedMovie && (
                <div className="mt-4 p-4 border rounded overflow-y-auto">
                    <h2 className="text-lg font-bold">👆클릭! 영화 정보</h2>
                    <p>영화명: {selectedMovie.movieNm}</p>
                    <p>순위: {selectedMovie.rank}</p>
                    <p>매출액: {parseInt(selectedMovie.salesAmt).toLocaleString()}원</p>
                    <p>관객수: {parseInt(selectedMovie.audiCnt).toLocaleString()}명</p>
                    <p>상영 스크린수: {parseInt(selectedMovie.scrnCnt).toLocaleString()}관</p>
                    <p>상영 횟수: {parseInt(selectedMovie.showCnt).toLocaleString()}회</p>
                </div>
            )
            }</div>
             </div>
    )
}
