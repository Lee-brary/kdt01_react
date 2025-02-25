
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GrAction } from "react-icons/gr";

function App() {


  return (
    <>
      <div>
        <div className="w-full h-full bg-cyan-50">
          <div className="w-full flex justify-center items-center p-50">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-xl">Vite + React</h1>
          <div className="card">
            <p>
              부산대학교 이원준
            </p>
          </div>
          <p className="w-full h-full flex justify-center items-center text-2xl text-blue-600/75 dark:text-sky-400/7">
            < GrAction />
          </p>
        </div>
      </div>
    </>
  )
}

export default App
