import React, {Provider} from 'react';
import './App.css';
import NewCalendarContainer from "./components/new-calendar/NewCalendarContainer";
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from "react-redux";
import Header from "./components/header/Header";


function App() {

  return (
      <Router>
          <div className="app">
            {/*<NewCalendarContainer/>*/}
              <Header/>
          </div>
      </Router>
  );
}

const AppContainer = connect(null, null)(App)

export default AppContainer;
