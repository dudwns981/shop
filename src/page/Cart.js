import React, { useState } from 'react'
import {Table} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'


function Cart(props) {
	let state = useSelector((state)=>state.reducer);
	let alert = useSelector((state)=>state.reducer2);
	console.log("aaa"+alert);
	console.log(state);
	let dispatch =  useDispatch();
	const totalprice = state.map(a => a.price*a.quan).reduce((prev,curr)=>prev+curr,0);
	const totalquan = state.map(a => a.quan).reduce((prev,curr)=>prev+curr,0);
	return (
		<div>
			<div>공백</div>
			<h1>장바구니</h1>
			<div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>상품번호</th>
        <th>상품명</th>
				<th>가격</th>
        <th>수량</th>
        <th>총합계</th>
        
      </tr>
    </thead>
    <tbody>
			{state.map((a,i)=>{
				console.log("Aaaa" + a.price)
				console.log("AA" + a.quan)
				// const total = a.price * a.quan;
				// const result = total.reduce((prev,curr)=>{prev + curr,0});
				// console.log(result);
				return(
				<tr key={i}>
					
					<td>{a.id}</td>
					<td>{a.name}</td>
					<td>{a.price}</td>
					<td>{a.quan}
					<button onClick={()=>{dispatch({type: '수량증가', payload:{id:a.id, quan:a.quan}})}}>+</button>
					<button onClick={()=>{dispatch({type: '수량감소', payload:{id:a.id, quan:a.quan}})}}>-</button></td>
					<td>
						{a.quan * a.price}
					</td>
					<td>
						<button onClick={()=>{
							dispatch({type:'주문취소',payload:{id:a.id}})
						}}>{
							
						}
						주문취소</button>
					</td>
				</tr>
				)
			})}
  
   
    </tbody>
		<tbody>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td>총개수</td>
				<td>총합계</td>
				<td></td>
				
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td>{totalquan}</td>
				<td>{totalprice}원</td>
				<td><button>주문하기</button></td>
				
			</tr>
		</tbody>
  </Table>
	{alert === true ? 
		<div className='my-alert2'>
			<p>지금 구매하시면 신규할인 20% </p>
		
			<button onClick={()=>{dispatch({type : '클릭'})}}>끄기</button>
		</div>  : null

	}
</div>
		</div>
	)
}

export default Cart
