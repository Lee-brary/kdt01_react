import React from 'react'
import { useState, useEffect } from "react";

export default function Traffic() {

    const RoadTrafficData = () => {
        
        //fetch된 전체 데이터
        const [tdata, setTData] = useState([]);

        //대분류 데이터
        const [c1, setC1] = useState();
        const [selC1, setSelC1] = useState();

        //사고유형 데이터
        const [c2, setC2] = useState();
        const [selC2, setSelC2] = useState();

        //사고정보
        cosnt [info, setInfo] = useState();


        //data fetch
        const getFetchData = async() => {
            const apiKey = import.meta.env.VITE_APP_API_KEY;
            let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&serviceKey=${apiKey}`;

            const resp = await fetch(url);
            const data = await resp.json();

            //console.log(url)

            setTData(data.data);
            //console.log("fetch", tdata)
        }

        useEffect(() => {
            if (tdata.length == 0) return;
            // console.log("tdata", tdata);

            //대분류

        })

        useEffect(() => {
            // API 호출 함수
            const getFetchData = async () => {
                // 실제 API 엔드포인트 및 인증키로 대체
                const apiKey = import.meta.env.VITE_APP_API_KEY;
                const API_ENDPOINT = "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&service";
                const API_KEY = "n4VVO6uidauc7OT03G03zgZiuYsgEAybLd%2BiG26Z4cdmXRAVzJBFkvXIw6XxvlPHpMEYIbsktrV2AhpJ5LWZaw%3D%3D";

                const response = await fetch(`${API_ENDPOINT}Key=${API_KEY}`);
                const result = await response.json();

                // 데이터 구조에 따라 필요한 데이터 추출
                setData(result.data);
            };

            getFetchData();
        }, []);


        return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="pb-4 bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for items"
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item) => (
                            <tr
                                key={item.id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.productName}
                                </th>
                                <td className="px-6 py-4">{item.color}</td>
                                <td className="px-6 py-4">{item.category}</td>
                                <td className="px-6 py-4">{item.price}</td>
                                <td className="px-6 py-4">
                                    <a
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

}
