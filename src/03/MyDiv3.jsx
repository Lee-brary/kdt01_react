
function MyDiv3({d1, d2, d3}){
    return (
        <div className="flex flex-col justify-center items-center
                        w-8/10 h-8/10
                        text-white bg-lime-500
                        rounded-sm m-5 p-5">
         <p className="flex w-full justify-start">
            {`${d1} > ${d2} > ${d3}`}
         </p>
        </div>
      )
}

export default MyDiv3; 