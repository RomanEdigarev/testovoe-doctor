import React, {Provider} from 'react';
import './App.css';
import NewCalendarContainer from "./components/new-calendar/NewCalendarContainer";
import {BrowserRouter as Router} from 'react-router-dom'
import {AppState} from "./redux/reduxStore";
import {connect} from "react-redux";


const mapStateToProps = (state : AppState) => {
    return {}
}
function App(props: any) {

  return (
      <Router>
          <div className="App">
            <NewCalendarContainer/>
          </div>
      </Router>
  );
}

const AppContainer = connect(mapStateToProps, null)(App)

export default AppContainer;
