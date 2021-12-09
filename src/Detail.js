import React, {useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
function Detail(props) {

  // 
  let {id} = useParams();
  let history = useHistory();

  const list = props.shoes;
  const 아이디= list.find(v=>v.id ===parseInt({id}.id));

	return (
    
		<div>
			<div className="container">
      <div className="row">
        <div className="col-md-6">


        {console.log(props.shoes[0].id === parseInt({id}.id))}
        {console.log(props.shoes[0].id)};
        {console.log(아이디.id)}


          <img src={`https://codingapple1.github.io/shop/shoes${아이디.id +1}.jpg`}
          
          width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[아이디.id].title}</h4>
          <p>{props.shoes[아이디.id].content}</p>
          <p>{props.shoes[아이디.id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
          <button className="btn btn-danger" onClick={()=>{
            history.goBack(); //경로로 이동 history.push('/경로')
          }}>뒤로가기</button> 
        </div>
      </div>
</div> 
		</div>
	)
}

export default Detail
