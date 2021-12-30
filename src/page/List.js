import React from 'react'
import axios from "axios";
import Price__list from '../Price__list';
import { useState } from "react";


function List(props) {
  let [load, loadSet] = useState(false);




	return (
		<div className="container" style={{marginLeft:"0px"}}>
		<div className="row" style={{width:"1800px"}}>
			{props.shoes.map((a,i) => {return <Price__list shoes={a} i={i} key={i} />})}
		</div>
			{/* 로딩중 UI  */}
		{load === true ? <Loading /> : null}
		<button className="btn btn-primary" onClick={() => {
				loadSet(true);
				// axios 사용 데이터 불러오기
				setTimeout(() => {
					axios.get("https://dudwns981.github.io/data/DATA.json").then((result) => {
							loadSet(false);
							console.log(result.data)
							props.shoes변경([...props.shoes, ...result.data]);
						})
						// axios 에러처리
						.catch((error) => {
							loadSet(false);
							
							console.log("실패했어요 실패이유:" + error );
						});
				}, 1000);
			}}
		>
			더보기
		</button>
	</div>
	)
}

export default List
function Loading() {
  return (
    <>
      <div>로딩중입니다!</div>
      <h3>안녕하세요!</h3>
    </>
  );
}
