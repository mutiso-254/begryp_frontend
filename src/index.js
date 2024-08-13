import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as AlertProvider } from "react-alert"
import AlertTemplate from "react-alert-template-basic"
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import rootReducer from "./reducers"
import { Provider } from "react-redux"
import {thunk} from "redux-thunk"
import ReactGA from "react-ga4";

ReactGA.initialize("G-8VR07K2HK6");


let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const alertOptions = {
  timeout: 5000,
  position: "top center"
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
