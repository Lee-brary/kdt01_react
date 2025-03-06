import MyDiv3 from "./MyDiv3"

function MyDiv2({dname1, dname2, dname3}) {
    return (
        <div className="w-9/10 h-9/10 
                    bg-lime-700 text-white text-2xl
                    p-5 font-bold
                    flex flex-col justify-center items-center">
            <div className="w-full text-left mb-10">
                {`${dname1} > ${dname2}`}
            </div>
            <MyDiv3 d1={dname1} d2={dname2} d3={dname3} />
        </div>

    )
}
export default MyDiv2;