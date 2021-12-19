// eslint-disable


import React, { useContext } from 'react';
import './App.css';
import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container,Button} from 'react-bootstrap';
import Data from './data.js';
import Price__list from './Price__list';
import {Link, Route, Switch} from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';
import Cart from './Cart';
import Test from './Test';
export let 재고cc = React.createContext();


// 같은 값을 공유하는 범위
// let 재고cc = React.createContext();

// 중요한 데이터는 상위 데이터에 보관하는 것이 중요; (관습) 
function App() {
  let [shoes, shoes변경] = useState(Data);
  let [load , loadSet] = useState(false);
  let [재고,재고변경] = useState([10,11,12,13,14,15]);

  
  

  // const beta = [{12},{43}];

  return (
    
    <div className="App">
  <Navbar bg="secondary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
      <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
      <Nav.Link as={Link} to="/test">test</Nav.Link>


    </Nav>
    </Container>
  </Navbar>

  
  {/* switch는 컴포넌트가 중복매칭 되는것을 피하기 위해서, switch 내에서는 중복매칭이 발생하지 않는다 */}

  <Switch>
  
  <Route exact path="/">
  <div className="background">
  <h1>20% Season Off </h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
    
  </p>
  </div>
  <재고cc.Provider value={재고}>

    <div className="container">
        <div className="row">
            {shoes.map((a,i)=>{ 
              console.log( a)
              return(
            
            <Price__list shoes={a} i={i} key={i}/>
            ); })}


        </div>

          {load === true ? <Loading/> : null}
      



        <button className="btn btn-primary" onClick={()=>{

          // 로딩중이라는 UI 띄우기
          loadSet(true);
          setTimeout(() => {
            axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            // 로딩중 Ui 삭제
            loadSet(false);
            shoes변경([...shoes, ...result.data])
          })
          .catch(()=>{
            loadSet(false);
            // 로딩중 Ui 삭제
            console.log("실패했어요")
          })
            
          }, 1000);

          

        }}>더보기</button>
      
        {/* {beta.map((a)=>{
          return (
            <div>abc</div>
          )
        })} */}
    </div>
    </재고cc.Provider>


    
  </Route>
  
    <Route path="/detail/:id">
      <재고cc.Provider value={재고}>
      <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} / > 
      </재고cc.Provider>

  </Route>

    <Route path="/cart">
      <Cart></Cart>
    </Route>
    <Route path="/test">
      <Test></Test>
    </Route>
{/* :id는 아무단어나 쳤을때 보여주는 곳 */}

  <Route exact path="/">
  <div>아무거나 적었을때</div>
  </Route>
    </Switch>

  
    </div>
  );
}

export default App;




function Loading (){
  return(
    <>
    <div>로딩중입니다!</div>
    <h3>안녕하세요!</h3>
    </>
  )
}

