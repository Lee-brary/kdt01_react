import MyDiv2 from "./MyDiv2"

function MyDiv1() {

  let d1 = "Div1";
  let d2 = "Div2";
  let d3 = "Div3";

  return (
    <div className="w-8/10 h-8/10 
                    bg-lime-900 text-white text-2xl
                    p-20 font-bold
                    flex flex-col justify-center items-center">
    <div className="w-full text-left mb-10">                
      {d1}
      </div>
    <MyDiv2 dname1={d1} dname2={d2} dname3={d3} />
    </div >
  )
}
export default MyDiv1;