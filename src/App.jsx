// import Hello from "./01/Hello"
// import Hellodate from "./01/Hellodate"
import { TiAdjustBrightness } from "react-icons/ti";
import reactLogo from "./assets/react.svg"
import viteLogo from "./assets/vite.png"
import MyClock from "./02/MyClock";
// import MyDiv1 from "./03/MyDiv1"
// import MyList from "./04/MyList" ;
import Lotto from "./05/Lotto";
// import FoodCard from "./06/FoodCard";
// import FoodMain from "./06/FoodMain";
// import MyToggle from "./07/MyToggle";
// import MyEffect from "./08/MyEffect";
import BoxOffice from "./09/BoxOffice";
// import Traffic from "./10/Traffic";
// import Myref from "./11/Myref";
// import Gallery from "./12/Gallery";
import Festival from "./13/Festival";
// import RouterMain from "./14/RouterMain";
import Fcst from "./15/fcst";
import FcstList from "./15/FcstList";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full xl:w-8/10 h-screen mx-auto 
                      flex flex-col">

        {/* 헤더 */}
        <header className="w-full min-h-20 bg-amber-100
                            px-10
                            flex justify-between items-center">

          {/* 왼쪽 로고 */}
          <div className="text-4xl font-bold text-amber-700 flex">
            PNU KDT10
            <div className="flex text-sm items-center mx-5">
              <img src={reactLogo} alt="react" className="w-8" />
              <img src={viteLogo} alt="vite" className="w-8" />
            </div>
          </div>

          {/* 네비게이션 */}
          <nav>
            <ul className="flex font-bold justify-center items-center">
              <li className="p-5">
                <Link to="/" className="text-amber-600 hover:underline">
                  현재 시각
                </Link>
              </li>
              <li className="p-5">
                <Link to="/lotto" className="text-amber-600 hover:underline">
                로또 숫자
                </Link>
              </li>
              <li className="p-5">
                <Link to="/boxoffice" className="text-amber-600 hover:underline">
                박스오피스
                </Link>
              </li>
              <li className="p-5">
                <Link to="/festival" className="text-amber-600 hover:underline">
                월별 축제 정보
                </Link>
              </li>
              <li className="p-5">
                <Link to="/fcst" className="text-amber-600 hover:underline">
                일기예보
                </Link>
              </li>
            </ul>
          </nav>

          {/* 오른쪽 아이콘 */}
          <div className="text-4xl font-bold">
                <Link to="/" className="text-yellow-900 ">
                   <TiAdjustBrightness />
                </Link>
          </div>
        </header>


        {/* 메인 콘텐츠 */}
        <main className="w-full  flex-grow
                        pt-10
                        flex flex-col justify-start items-center
                        overflow-y-auto">
          
          {/* 라우트 설정 */}
          <Routes>
            <Route path="/" element={<MyClock />} />
            <Route path="/lotto" element={<Lotto />} />
            <Route path="/boxoffice" element={<BoxOffice />} />
            <Route path="/festival" element={<Festival />} />
            <Route path="/fcst" element={<Fcst />} />
            <Route path="/fcstlist" element={<FcstList />} />
          </Routes>



          {/* <MyList /> */}
          {/* <MyDiv1 /> */}
          {/* <MyClock/> */}
          {/* <Lotto/> */}
          {/* {<FoodMain/>} */}
          {/* {<MyToggle/>} */}
          {/* <MyEffect/>} */}
          {/* <BoxOffice /> */}
          {/* <Traffic /> */}
          {/* <Myref /> */}
          {/* <Gallery /> */}
          {/* <Festival /> */}
          {/* <RouterMain /> */}
        </main>
        <footer className="w-full min-h-20 bg-amber-100
                          px-10 text-xl text-black font-bold
                          flex justify-center items-center">
          🐱‍👤[K-Digital 부산대] 풀스택 웹 개발자👨‍💻 _리액트🐱‍👤
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App
