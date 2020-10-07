import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';
import store from "./redux/reduxStore";
import {Provider} from "react-redux";


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <AppContainer />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

