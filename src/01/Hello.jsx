import Hellodate from "./Hellodate";

function Hello() {
    let name = "PNU1" ;
    return(
        <>
        <h1 className="text-4xl">
            {name == "PNU" ? "부산대학교" : name}
            님 안녕하세요
            <Hellodate/>
        </h1>
        <Hellodate />
        </>
    ) ;

}

export default Hello ;