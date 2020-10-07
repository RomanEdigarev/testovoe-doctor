import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from "react-redux";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import AppointmentCards from "./components/appointment-cards/AppointmentCards";


function App() {

    return (
        <Router>
            <div className="app">
                {/*<NewCalendarContainer/>*/}
                <Navbar/>
                <Header/>
                {/*<AppointmentCards/>*/}
            </div>
        </Router>
    );
}

const AppContainer = connect(null, null)(App)

export default AppContainer;
