import React, {Provider} from 'react';
import './App.css';
import NewCalendarContainer from "./components/new-calendar/NewCalendarContainer";
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from "react-redux";


function App(props: any) {

  return (
      <Router>
          <div className="App">
            <NewCalendarContainer/>
          </div>
      </Router>
  );
}

const AppContainer = connect(null, null)(App)

export default AppContainer;
