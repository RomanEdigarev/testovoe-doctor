import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/reduxStore";
import {Provider} from "react-redux";
import AppContainer from "./App";


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppContainer />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

