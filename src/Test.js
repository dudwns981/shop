import React from 'react'
import { connect } from 'react-redux'

function Test(props) {
	return (
		<div>

		{props.test.map((a)=>{
			return(
				<div>
						<div>{a.id}</div>
						<div>{a.name}</div>
						<div>{a.quan}</div>
						<div>{a.stock}</div>
				</div>
			)
		})}



		</div>
	)
}
function testProps(state){
	return {
		test: state
	}
}

export default connect(testProps)(Test)
