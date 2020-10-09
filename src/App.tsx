import React, {FC} from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from "react-redux";
import AppointmentCards from "./components/appointment-cards/AppointmentCards";
import {getAppointmentsInfo} from "./redux/reducers/appointmentReducer";
import {DayType} from "./redux/reducers/types";
import {AppState} from "./redux/reduxStore";


const App : FC<MapDispatchToProps & MapStateToProps> = ({getAppointmentInfo, appointments, isLoad}) => {

    return (
        <Router>
            <div className="app">
                {/*<NewCalendarContainer/>*/}
                {/*<Navbar/>*/}
                {/*<Header/>*/}
                <AppointmentCards getAppointment={getAppointmentInfo} appointments={appointments} isLoad={isLoad}/>
            </div>
        </Router>
    );
}
type MapStateToProps = {
    appointments : DayType[],
    isLoad : boolean
}

type MapDispatchToProps = {
    getAppointmentInfo : () => void
}

const mapStateToProps = (state : AppState) : MapStateToProps => {
    return {appointments : state.appointmentReducer.appointments, isLoad : state.appointmentReducer.isLoad}
}

const AppContainer = connect<MapStateToProps, MapDispatchToProps, unknown, AppState>(mapStateToProps, {getAppointmentInfo : getAppointmentsInfo})(App)

export default AppContainer;
