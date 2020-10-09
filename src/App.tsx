import React, {FC} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import ContentContainer from "./components/pages/ContentConatiner";


const App : FC = (props) => {

    return (
        <Router>
            <div className="app">
                <Navbar/>
                <ContentContainer/>
                {/*<NewCalendarContainer/>*/}
                {/*<AppointmentCards getAppointment={getAppointmentInfo} appointments={appointments} isLoad={isLoad}/>*/}
                {/*<ElectronCardContainer/>*/}
            </div>
        </Router>
    );
}


export default App;
