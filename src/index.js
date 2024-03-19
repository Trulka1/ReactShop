import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter  } from 'react-router-dom';
import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));



export let rerenderTree = (state) => {
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} dispatch = {store.dispatch.bind(store)} store ={store}/>
    </BrowserRouter>
  </React.StrictMode>
);
}

rerenderTree(store.getState());
store.subscribe(() =>{
  let state = store.getState()
  rerenderTree(state)
})


reportWebVitals();
