import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container); //React DOM = tag 
// Vẽ tt sang HTML 
root.render(
  <React.StrictMode>
    {/* Redux = Provider là 1 cái store  */}
    <Provider store={store}> 

      <App />
    </Provider>
  </React.StrictMode>
);


