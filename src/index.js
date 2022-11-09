import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); //React DOM = tag 
// Vẽ tt sang HTML 
root.render(
  <React.StrictMode>
    {/* Redux = Provider là 1 cái store  */}
    <Router >
      <Provider store={store}> 
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
// Đang lỗi router no zo hỏng dc
//đây thử xem dc r mà k hiểu tại s
// react nó là cơ chế component, component cha ôm component con, thì docs của react-router-dom đó, nó kêu là bọc cái <App /> bằng component <BrowserRouter></BrowserRouter> 
// đúng chưa Dạ, tức là nó phải bọc vô thì mới nhận dc, tương tự tới Provider của react-redux, thì 2 thằng đó bọc vô <App/> là chạy dc à :)))
// còn {BrowserRouter as Router}, tức là a lấy BrowserRouter ra từ reac-router-dom và đặt tên nó là Router, này là cú pháp của es6 thôi,
// 