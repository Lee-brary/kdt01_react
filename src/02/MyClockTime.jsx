function MyClockTime() {
   

    return (
        <div>
            현재 시각 :
            <span style={{ color: "blue", fontWeight: "bolder" }}>
                {new Date().toLocaleTimeString()} 
            </span>
        </div>
    )
}

export default MyClockTime;