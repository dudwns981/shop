import React from 'react'
import {Table} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'


function Cart(props) {
	let state = useSelector((state)=>state.reducer);
	let alert = useSelector((state)=>state.reducer2);
	console.log("aaa"+alert);
	console.log(state);
	let dispatch =  useDispatch();

	// console.log("출력" +  props.안녕)
	return (
		<div>
			<div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>상품번호</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경</th>
        
      </tr>
    </thead>
    <tbody>
			{state.map((a,i)=>{
				return(
				<tr key={i}>
					<td>{a.id}</td>
					<td>{a.name}</td>
					<td>{a.quan}</td>
					<td>
						<button onClick={()=>{dispatch({type: '수량증가', payload:{id:a.id, quan:a.quan}})}}>+</button>
						<button onClick={()=>{dispatch({type: '수량감소', payload:{id:a.id, quan:a.quan}})}}>-</button>
					</td>
					<td>
						<button onClick={()=>{
							dispatch({type:'주문취소',payload:{id:a.id}})
						}}>주문취소</button>
					</td>
					
				</tr>
				)
			})}
    
   
    </tbody>
  </Table>
	{alert === true ? 
		<div className='my-alert2'>
			<p>지금 구매하시면 신규할인 20%</p>
			<button onClick={()=>{dispatch({type : '클릭'})}}>끄기</button>
		</div>  : null

	}
	
		
	
	{/* <div>avd</div> */}

	

 
  
</div>
		</div>
	)
}
// function stateProps(state){
// 	console.log(state);
// 	return {
		
// 		state : state.reducer,
// 		alert보기 : state.reducer2
		
	
// 	}
// }
// export default connect(stateProps)(Cart)
export default Cart
