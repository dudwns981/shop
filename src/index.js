import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 라이브러리에서 경로없이 바로 들고오는 것
import {BrowserRouter} from 'react-router-dom'
// redux 세팅
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
import {confirmAlert} from 'react-confirm-alert';
function reducer2(state=true,액션){
  if(액션.type === '클릭'){
    state = false;
  }
  return state;
}

let item_list = [];

// reducer에는 초기값과 데이터수정방법을 정의 마지막으로 항상 state 데이터를 뱉어야 된다.

function reducer (state = item_list, 액션){
  if (액션.type === '항목추가') {
    let found = state.findIndex((a) => {
        return a.id === 액션.payload.id
    });
    console.log(found)
    if (found >= 0) {

        let copy = [...state];
        copy[found].quan++;
        return copy

    } else {
        let copy = [...state];
        copy.push(액션.payload);
        return copy
    }


    
} else if (액션.type === '수량증가') {
  let copy = [...state];
  let found = copy.find(a =>a.id === 액션.payload.id
  );
  found.quan++;

    return copy

}else if(액션.type === '수량감소'){
  let copy = [...state];
  let found = copy.find(a =>a.id === 액션.payload.id
  );
  console.log("hi" + found.quan);
  if(found.quan <= 1 ){
    alert("주문이 없습니다.")
  }else {
    found.quan--;
  }
    return copy
}else if (액션.type === '주문취소'){
  let copy = [...state];
  let found = copy.find(a =>a.id === 액션.payload.id);
  let filtered = state.filter((element)=>element.id !== found.id);
  return filtered;

}
// 보완해야할점 현재 findindex를 사용해서 주문하는 순서대로 배열에 추가했는데, 삭제버튼을 만들어서 배열을 중간에 하나가 빠진다면 다밀린다. 따라서 고정 아이디 값을 찾아서 해당하는 객체의 값에 +-를 해주기 

// 클릭을 한다면 클릭한 cart 창에 배열의 id값을 들고와서 state에 같은 id값이 있으면 삭제 
else{
  return state
  
}

}
// reducer 여러개 합치는 문법
let store = createStore(combineReducers({reducer,reducer2}));




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