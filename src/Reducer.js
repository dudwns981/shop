import React from 'react'

function Reducer (state = props.기본state, 액션){
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

export default Reducer
