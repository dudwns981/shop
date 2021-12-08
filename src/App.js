// eslint-disable


import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container,Button} from 'react-bootstrap';
import Data from './data.js';
import Price__list from './Price__list';

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  
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
  
    <div className="container">

    <div className="row" >
    {shoes.map((a,i)=>{
      return(

      <Price__list shoes={a}/>

        // <Price__list img={a.img} id={a.id} 상품명={a.title} 가격설명={a.content, a.price}/>
        // <Price__list shoes={shoes[i]}/>
      );
    })}
    </div>

{/*  반복문전 데이터 */}
      {/* <div className="row">

        <div className="col-md-4"><img src="https://codingapple1.github.io/shop/shoes1.jpg " width="100%"></img>
        <h4>{shoes[1].title}</h4>
        <p>{shoes[1].price}원</p>
        </div>

      <Price__list img={"https://codingapple1.github.io/shop/shoes2.jpg"} 상품명={shoes[2].title} 가격설명={shoes[2].price} />



        <div className="col-md-4"><img src="https://codingapple1.github.io/shop/shoes3.jpg"  width="100%"></img>
        <h4>상품명</h4>
        <p>상품설명 & 가격</p></div>

      </div> */}
      
      </div>

    
  




    

    </div>
  );
}

export default App;
