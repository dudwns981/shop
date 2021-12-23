// 임시상품명 말고 실제 상품명 데이터를 redux에 저장
// 그다음 주문하기를 누르면 실제데이터에 추가가 되게끔
// 같은 상품이 이미 있으면 수량만 증가시키는 기능 
// 항목코드는 if문을 추가 이미 항목이 있다면 추가하기
import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom';
import {재고cc} from './App.js'


function Test() {
	let [count, setCount] = useState(0);
	let [age, setAge] = useState(20);
	
	const hi = () => {
		setCount(count++);
		var bbc = "abcdefg"
		
	
	}
	let 재고 = useContext(재고cc)

	
 	return (
		<div>			
					 
			<div>{재고}</div>
			<div>안녕하십니까 전 {age}</div>
			<div>안녕하십니까 전 {count}</div>
			<button onClick={()=>{hi()				
			}}>누르면 한살먹기</button>
		</div>
	)
}

export default Test

