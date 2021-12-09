import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import styled from 'styled-components' 
import './Detail.scss'
let 박스 = styled.div`
  padding : 30px;
  font
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
`


function Detail(props) {

  let [view,viewChange] = useState(true)
  let [inputData, inputData변경] = useState('')

  const fade = (a)=>{
    viewChange(a)
  }

  // detail이 업데이트 되거나 렌더링이 될때 실행
  useEffect(()=>{
  let timer = setTimeout(() => {
      fade(false) },2000);
    console.log("출력시작")

    // 컴포넌트가 사라질때 특정코드를 실행
    return () =>{clearTimeout(timer); console.log("페이지변경")}

    // view가 변경될때만 state가 변경됨 [여러개 넣기 가능]
    // [] 빈칸이라면 페이지가 최초 렌더링 될때만 사용됨
  },[]);

  // useEffect(()=>{
  //   setTimeout(() => {
  //     fade(true)
  //   }, 5000);
    
  // })



  let {id} = useParams();
  let history = useHistory();

  const list = props.shoes;
  const 아이디= list.find(v=>v.id ===parseInt({id}.id));

	return (
    
		<div>
			<div className="container">
        <박스>
        <제목 className="red">상세페이지</제목>
        </박스>
    {inputData}
    <input onChange={(e)=>{inputData변경(e.target.value)}}/>




      {view === true 
      ? <div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      : null }
      

      <div className="row">
        <div className="col-md-6">


        {/* {console.log(props.shoes[0].id === parseInt({id}.id))} */}
        {/* {console.log(props.shoes[0].id)}; */}
        {/* {console.log({id})} */}
        {/* {console.log({id1})} */}


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
