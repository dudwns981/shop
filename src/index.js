import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 라이브러리에서 경로없이 바로 들고오는 것
import {BrowserRouter} from 'react-router-dom'
// redux 세팅
import {Provider} from 'react-redux'
import {createStore} from 'redux'
let 기본state = [
  {id: 1, name : "검정신발" , quan: 10 , stock : 50 },
  {id: 2, name : "흰색신발" , quan: 20 , stock : 50},
  {id: 3, name : "빨강신발" , quan: 30, stock : 50 },
  {id: 4, name : "파랑신발" , quan: 40 , stock : 50},
  {id: 5, name : "파랑신발" , quan: 40 , stock : 50},
  {id: 6, name : "파랑신발" , quan: 40 , stock : 50}
]

function reducer (state = 기본state, 액션){
  // reducer는 항상 state 데이터를 뱉어야 된다.
  if(액션.type === '수량증가'){
    
    let copy = [...state]
    copy[0].quan++;
    return copy

    // return 수정된state
   }else if(액션.type === '수량감소'){
    let copy = [...state];
    copy[0].quan--;
    return copy 
   }
   else{
  return state

}
  
}
let store = createStore(reducer)




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} >
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// 해쉬라우터는 주소창에다가 #을 넣는 건데 더 안전하게 라우팅할 수 있음