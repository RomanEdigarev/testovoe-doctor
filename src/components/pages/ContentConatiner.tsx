import React, {FC} from "react";
import Header from "../header/Header";
import {DayType} from "../../redux/reducers/types";
import {AppState} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {getAppointmentsInfo} from "../../redux/reducers/appointmentReducer";
import CabinetPage from "./cabinet/CabinetPage";
import {Route} from "react-router-dom";
import Appointments from "./appointments/Appointments";

const Content : FC<MapStateToProps & MapDispatchToProps> = (props) => {

    return (
        <div style={{width: '100%'}}>
            <Header/>
            <Route path={'/profile'}><CabinetPage {...props}/></Route>
            <Route path={'/appointments'}><Appointments {...props}/></Route>
        </div>
    )
}

type MapStateToProps = {
    appointments: DayType[],
    isLoad: boolean
}

type MapDispatchToProps = {
    getAppointmentInfo: () => void
}

const mapStateToProps = (state: AppState): MapStateToProps => {
    return {appointments: state.appointmentReducer.appointments, isLoad: state.appointmentReducer.isLoad}
}

const ContentContainer = connect<MapStateToProps, MapDispatchToProps, unknown, AppState>
(mapStateToProps, {getAppointmentInfo: getAppointmentsInfo})(Content)


export default ContentContainer;