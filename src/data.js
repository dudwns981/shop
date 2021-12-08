// 컴포넌트로 만들어 첨부하기
//  컴포넌트에 데이터바인딩 완료하기
// 컴포넌트를 반복문으로 돌리기



export default [

  {
    id : 0,
    img : "https://codingapple1.github.io/shop/shoes1.jpg",
    title : "White and Black",
    content : "Born in France",
    price : 120000
  },

  {
    id : 1,
    img : "https://codingapple1.github.io/shop/shoes2.jpg",
    title : "Red Knit",
    content : "Born in Seoul",
    price : 110000
  },

  {
    id : 2,
    img : "https://codingapple1.github.io/shop/shoes3.jpg",
    title : "Grey Yordan",
    content : "Born in the States",
    price : 130000 
  }
]

// 보낼 변수가 많을 때는
//  내보내기 : export {변수1, 변수2}
// 가져오기: import {변수1, 변수2} from 경로
// 이런경우에는 받아올때 작명이 안됨 그대로 받아와야함