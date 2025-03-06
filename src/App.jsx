// import Hello from "./01/Hello"
// import Hellodate from "./01/Hellodate"
import { TiAdjustBrightness } from "react-icons/ti";
import reactLogo from "./assets/react.svg"
import viteLogo from "./assets/vite.png"
// import MyClock from "./02/MyClock";
// import MyDiv1 from "./03/MyDiv1"
// import MyList from "./04/MyList" ;
// import Lotto from "./05/Lotto";
// import FoodCard from "./06/FoodCard";
import FoodMain from "./06/FoodMain";

function App() {
  return (
    <div className="w-full xl:w-8/10 h-screen mx-auto 
                      flex flex-col">
      <header className="w-full min-h-20 bg-amber-100
                            px-10
                            flex justify-between items-center">
        <div className="text-4xl font-bold text-amber-700 flex">
          PNU KDT10
          <div className="flex text-sm items-center mx-5">
            <img src={reactLogo} alt="react" className="w-8" />
            <img src={viteLogo} alt="vite" className="w-8" />
          </div>
        </div>

        <div className="text-4xl font-bold text-blue">
          <TiAdjustBrightness />
          
        </div>
      </header>

      <main className="w-full  flex-grow
                        pt-10
                        flex flex-col justify-center items-center
                        overflow-y-auto">
        {/* <MyList /> */}
        {/* <MyDiv1 /> */}
        {/* <MyClock/> */}
        {/* {<Lotto/>} */}
        {<FoodMain/>}
      </main>
      <footer className="w-full min-h-20 bg-amber-100
                          px-10 text-xl text-black font-bold
                          flex justify-center items-center">
        🐱‍👤[K-Digital 부산대] 풀스택 웹 개발자👨‍💻 _리액트🐱‍👤
      </footer>
    </div>
  );
}

export default App
