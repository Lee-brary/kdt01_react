function Hellodate() {

    const current = new Date();

    const tStyle = {
        backgroundColor: "aliceblue",
        padding: "5px",
        fontsize: "large",
    }

    return (
        <div style={tStyle}>
            현재 시각 :
            <span style={{ color: "blue", fontWeight: "bolder" }}>
                {current.toLocaleTimeString()} 
            </span>
        </div >
    )

}

export default Hellodate;