import React, {useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import styled from 'styled-components' 
import './Detail.scss'
import {재고cc} from './App.js'
import { Nav, Link,Navbar, Container,Button} from 'react-bootstrap';
import {CSSTransition} from "react-transition-group";
import {connect} from 'react-redux'
// import { FALSE } from 'node-sass'
let 박스 = styled.div`
  padding : 30px;
  font
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
`



function Detail(props) {

  let [view, viewChange] = useState(true)
  let [inputData, inputData변경] = useState('')
  // tap 기능 만들기
  let [tap, tapSet] = useState(0);
  let [스위치, 스위치변경] = useState(false)


  
  function 재고감소(){
    let newStock = [... props.재고];
    newStock[아이디.id] --;
    props.재고변경(newStock);
  }


  
  // console.log("재고출력" + props.재고)
  // detail이 업데이트 되거나 렌더링이 될때 실행
  useEffect(()=>{
  let timer = setTimeout(() => {
      viewChange(false) },5000);
    // console.log("출력시작")

    // 컴포넌트가 사라질때 특정코드를 실행
    return () =>{clearTimeout(timer); }

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
// 재고사본만들기

let 재고 = useContext(재고cc)
// console.log(재고)






	return (
    
		<div>
			<div className="container">
        <박스>
        <제목 className="red">상세페이지</제목>
        </박스>
        {/* input 박스  */}
    {/* <div>{inputData}</div>
    <input onChange={(e)=>{console.log(e); inputData변경(e.target.value)}}/> */}



{/*    재고임박박스 */}
      {view === true 
      ? <div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      : null }  
      

      <div className="row">
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${아이디.id +1}.jpg`}
          
          width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[아이디.id].title}</h4>
          <p>{props.shoes[아이디.id].content}</p>
          <p>{props.shoes[아이디.id].price}</p>
          <Inventory 재고={props.재고} id={아이디.id}/>
          <p>남은재고 : {재고[아이디.id]}</p>
          
        
 
          <button className="btn btn-danger" onClick={()=>{
           재고감소();
           props.dispatch({type : '항목추가',
            payload:{id:props.shoes[아이디.id].id + 1,
                     name:props.shoes[아이디.id].title
                     ,quan:1}});
           history.push('/cart');
            }}>주문하기</button> 

          <button className="btn btn-danger" onClick={()=>{
            history.goBack(); //경로로 이동 history.push('/경로')
          }}>뒤로가기</button> 
        </div>
      </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="/link-0">
      <Nav.Item>
        <Nav.Link onClick={()=>{tapSet(0);스위치변경(false)}} eventKey="link-0">
          0번째 내용 
        </Nav.Link >
      </Nav.Item>

      <Nav.Item>
        <Nav.Link onClick={()=>{tapSet(1); 스위치변경(false)}} eventKey="link-1" >
          1번째 내용
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{tapSet(2)}} eventKey="link-2" >
          2번째 내용
        </Nav.Link>
      </Nav.Item>
    </Nav>
    {/* css 트렌지션 애니메이션 세팅법 */}
          <CSSTransition in={스위치} classNames="wow" timeout={500}>
          <TabContent tap={tap} 스위치변경={스위치변경}></TabContent>
          </CSSTransition>
      
</div>  
		</div>
	)
}



// if문이 여러개일때는 컴포넌트로 만들기
function TabContent(props){

    useEffect(()=>{
      props.스위치변경(true);
    })
  if(props.tap===0){
    return <div>0번째 내용입니다.</div>
} else if(props.tap===1){
    return <div>1번째 내용입니다.</div>

} else if (props.tap===2){
    return <div>2번째 내용입니다.</div>
}
  
}



function Inventory (props) {
  // console.log(props.재고)
  return (
    <div className="inventory">
      재고:{props.재고[props.id]}

    </div>
    
  )
}

export default connect(stateProps)(Detail)

// redux 설치
function stateProps(state){
	// console.log(state);
	return {
		
		state : state.reducer,
		alert보기 : state.reducer2
		
	
	}
}