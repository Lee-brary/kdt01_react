import { useEffect, useState } from "react";
import TailButtonLine from "../07/TailButtonLine";
//import styles


function MyClockTime() {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        let tm = setInterval(() => setCurrentTime(new Date()), 1000);

        return () => {
            clearInterval(tm)
        };
    }, []);


    const handleClick = () => {
        setCurrentTime(new Date());
    }


    return (

        <div className="w-full p-20 text-lime-600">
            {/* <p className="pst">
            현재 시각 : 
            </p>
            
            <p className="pst">
            {currentTime.toLocaleTimeString()}
            </p> */}
            
            {/* <div className="w-full flex justify-center items-center">
                <TailButtonLine caption="클릭"
                    color="blue"
                    onClick={handleClick} />
            </div> */}

            <div className="w-full flex justify-center items-center text-4xl">
                <span style={{ color: "blue", fontWeight: "bolder" }}>
                    {new Date().toLocaleTimeString()}
                </span>
            </div>
        </div>
    )

}

export default MyClockTime;