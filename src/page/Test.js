// 임시상품명 말고 실제 상품명 데이터를 redux에 저장
// 그다음 주문하기를 누르면 실제데이터에 추가가 되게끔
// 같은 상품이 이미 있으면 수량만 증가시키는 기능 
// 항목코드는 if문을 추가 이미 항목이 있다면 추가하기
import React, {useEffect, useState, useContext, memo} from 'react'
import { useParams } from 'react-router-dom';
import {재고cc} from '../App.js'

const 스케줄 = {
	note : <p>안녕하세요</p>,
	pen : <p>어서오세요</p>,
	hello: <p>집에 오세요</p>
	
}


function Test() {
	let [count, setCount] = useState(0);
	let [age, setAge] = useState(20);
	let 재고 = useContext(재고cc)

	
 	return (
		<div>			
					 
			<div>{재고}</div>
			<div>안녕하십니까 전 {age}</div>
			<div>안녕하십니까 전 {count}</div>
			<div>{스케줄['pen']}</div>
			<Parent 이름='존박1' 나이='20'></Parent>
		</div>
	)
}
function Parent (props){
	return (
		<div>
			<Child1 이름={props.이름}></Child1>
			<Child2 나이={props.나이}></Child2>
		</div>
	)
}

function Child1(){
useEffect(()=>{console.log('렌더링됨1')})
	return <div>1111</div>
}
let Child2 = memo (function (){
	useEffect(()=>{console.log('렌더링됨2')});
	return <div>2222</div>
});
export default Test

