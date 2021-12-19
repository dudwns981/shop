import React from 'react'
import {Table} from 'react-bootstrap'
import { connect } from 'react-redux'


function Cart(props) {
	console.log("출력" +  props.안녕)
	return (
		<div>
			<div>
  <Table responsive="sm">
    <thead>
      <tr>
        <th>#</th>
        <th>상품명</th>
        <th>수량</th>
        <th>변경</th>
        
      </tr>
    </thead>
    <tbody>
			{props.state.map((a,i)=>{
				return(
				<tr key={i}>
					<td>{a.id}</td>
					<td>{a.name}</td>
					<td>{a.quan}</td>
					<td>{a.stock}</td>
					<td><button onClick={()=>{props.dispatch({type: '수량증가'})}}>+</button>
					<button onClick={()=>{props.dispatch({type: '수량감소'})}}>-</button></td>
					
				</tr>
				)
			})}
    
   
    </tbody>
  </Table>
	{/* <div>avd</div> */}

	

 
  
</div>
		</div>
	)
}
function stateProps(state){

	return {
		
		state : state
		
	
	}
}
export default connect(stateProps)(Cart)
// export default Cart