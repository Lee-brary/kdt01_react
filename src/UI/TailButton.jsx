import React from 'react'

export default function TailButton({caption, color, onClick}) {
  
    const bg = {
        "blue" : "bg-blue-700",
        "orange" : "bg-orange-700",
        "lime" : "bg-lime-700",
    }

    const bgHover = {
      "blue" : "bg-blue-400",
      "orange" : "bg-orange-400",
      "lime" : "bg-lime-400",
    }
  
    return (
    <button className={`inline-flex h-10
                        mx-2 rounded-md px-2
                        justify-center items-center
                        text-white hover:font-bold
                        ${bg[color]} ${bgHover[color]}
                        bg-blue-600
                        hover:bg-blue-800
                        hover:cursor-grab`}
            onClick = {onClick}>
      {caption}
    </button>
  )
}
