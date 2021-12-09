import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 라이브러리에서 경로없이 바로 들고오는 것
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// 해쉬라우터는 주소창에다가 #을 넣는 건데 더 안전하게 라우팅할 수 있음