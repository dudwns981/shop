// eslint-disable

import React, { useContext } from "react";
import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import Data from "./data.js";
import Price__list from "./Price__list";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./page/Detail";
import axios from "axios";
import Cart from "./page/Cart";
import Test from "./page/Test";
import Nav__bar from "./component/Navbar";
import Home from "./page/Home";
export let 재고cc = React.createContext();

// 같은 값을 공유하는 범위
// let 재고cc = React.createContext();

// 중요한 데이터는 상위 데이터에 보관하는 것이 중요; (관습)
function App() {
  let [shoes, shoes변경] = useState(Data);
  let [load, loadSet] = useState(false);
  let [재고, 재고변경] = useState([10, 11, 12, 13, 14, 15]);

  return (
    <div className="App">

{/* Navbar */}
      <Nav__bar/>

      {/* switch는 컴포넌트가 중복매칭 되는것을 피하기 위해서, switch 내에서는 중복매칭이 발생하지 않는다 */}
      <Switch>
        {/* home 화면 */}
        <Route exact path="/">
      <Home/>
        </Route>

        {/* list 화면 */}
        <Route exact path="/list">
          <재고cc.Provider value={재고}>
            <div className="container">
              <div className="row">
                {shoes.map((a,i) => {return <Price__list shoes={a} i={i} key={i} />})}
              </div>
                {/* 로딩중 UI  */}
              {load === true ? <Loading /> : null}
              <button className="btn btn-primary" onClick={() => {
                  loadSet(true);
                  // axios 사용 데이터 불러오기
                  setTimeout(() => {
                    axios.get("https://codingapple1.github.io/shop/data2.json").then((result) => {
                        loadSet(false);
                        shoes변경([...shoes, ...result.data]);
                      })
                      // axios 에러처리
                      .catch((error) => {
                        loadSet(false);
                        
                        console.log("실패했어요 실패이유:" + error );
                      });
                  }, 1000);
                }}
              >
                더보기
              </button>
            </div>
          </재고cc.Provider>
        </Route>

        {/* 경로지정 */}  
        {/* :id는 / +아무단어나 쳤을때 보여주는 곳 */}

        <Route path="/detail/:id">
          <재고cc.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
          </재고cc.Provider>
        </Route>

        <Route path="/cart">
          <Cart/>
        </Route>
        
        <재고cc.Provider value={재고}>
        <Route path="/test">
          <Test/>
        </Route>
        </재고cc.Provider>
        
        <Route exact path="/">
          <div>아무거나 적었을때</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

function Loading() {
  return (
    <>
      <div>로딩중입니다!</div>
      <h3>안녕하세요!</h3>
    </>
  );
}
