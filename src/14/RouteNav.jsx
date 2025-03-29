import React from 'react'
import { Link } from 'react-router-dom'


export default function RouteNav() {
  return (
    <ul className='w-screen h-20 flex gap-4 justify-center items-center bg-gray-200 width:200px'>
      <li className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
                    dark:focus:ring-blue-800'><Link to="/">Home</Link></li>
      <li className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
                    dark:focus:ring-blue-800'><Link to="/p1/menu/menu">Page1</Link></li>
      <li className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
                    dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none 
                    dark:focus:ring-blue-800'><Link to="/p2">Page2</Link></li>
    </ul>
  )
}
