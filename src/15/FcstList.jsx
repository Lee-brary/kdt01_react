import TailCard from "../UI/TailCard"
import TailButton from "../UI/TailButton"
import TailSelect from "../UI/TailSelect";
import { useRef } from "react"
import { useSearchParams } from "react-router-dom";
import getcode from './getcode.json';

// 처음 옵션 바뀌면 가져오기
// url, useref변수
// 옵션 바뀌면 뿌려주기


export default function FcstList() {

  //쿼리스트링
  const [sParams] = useSearchParams();
  const dt = sParams.get("dt");
  const si = sParams.get("si");
  const gubun = sParams.get("gubun");
  const x = sParams.get("x");
  const y = sParams.get("y");

  console.log({ dt, si, gubun, x, y });

  //유즈레퍼 변수
  const refItem = useRef();
  const opsItem = getcode.filter(item => item["예보구분"] == (gubun+"예보"))
                        .map(item => `${item["항목명"]}(${item["항목값"]})`);

  const handleChange = () => {
    console.log(refItem.current.value)
  }

  return (
    <>
      <div className="w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        <h2 className="w-10/12 text-xl font-bold 
                      flex justify-center items-center p-4">
          {`${si} ${gubun}예보 (${dt.replaceAll("-", ".")})`}
        </h2>
        <TailSelect id="se1Si"
          refSel={refItem}
          ops={opsItem}
          onChangeHandle={handleChange} />
      </div>

        <table className="w-10/12 mt-5 text-l text-left rtl:text-center border border-gray-400">
          <thead className="text-md text-center font-bold text-gray-900 bg-gray-900">
            <tr className="bg-gray-200">
              <th className="border border-gray-400 p-2">항목명</th>
              <th className="border border-gray-400 p-2">예측 일자</th>
              <th className="border border-gray-400 p-2">예측 시간</th>
              <th className="border border-gray-400 p-2">예측값</th>
            </tr>
          </thead>
          <tbody>
          {opsItem
            .filter((item) => item["항목값"] === refItem)
            .map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-400 p-2">{item.항목명}</td>
                <td className="border border-gray-400 p-2">{dt}</td>
                <td className="border border-gray-400 p-2">예측 시간</td>
                <td className="border border-gray-400 p-2">항목값</td>
              </tr>
          ))}
          </tbody>
        </table>
    </>
  )
}
