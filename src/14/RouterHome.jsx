import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TailButton from '../UI/TailButton'

export default function RouterHome() {

    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <ul className='w-4/12 h-full gap-4 mt-10 justify-center items-center bg-indigo-100 width:200px'>
                <li className='flex justify-center m-2 text-black border border-gray-400 hover:bg-blue-200 focus:ring-4
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
                    dark:focus:ring-blue-800'><Link to="/p1/🍎/과일">사과 🍎</Link></li>
                <li className='flex justify-center m-2 text-black border border-gray-400 hover:bg-blue-200 focus:ring-4
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
                    dark:focus:ring-blue-800'><Link to="/p1/🍌/과일">바나나 🍌</Link></li>
                <li className='flex justify-center m-2 text-black border border-gray-400 border-color- hover:bg-blue-800 focus:ring-4
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
                    dark:focus:ring-blue-800'><Link to="/p1/🥕/채소">당근 🥕</Link></li>
            </ul>

            <div className='w-4/12 px-2 grid grid-cols-1 gap-1 place-content-center'>
                <TailButton caption='사과 🍎'
                    color="blue"
                    onClick={() => navigate("/p2?item1=🍎&item2='과일'")} />
                <TailButton caption='바나나 🍌'
                    color="blue"
                    onClick={() => navigate("/p2?item1=🍌&item2='과일'")} />

                <TailButton caption='당근 🥕'
                    color="blue"
                    onClick={() => navigate("/p2?item1=🥕&item2='과일'")} />

            </div>


        </div>
    )
}
