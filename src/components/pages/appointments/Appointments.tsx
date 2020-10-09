import React, {FC} from "react";
import AppointmentCards from "../../appointment-cards/AppointmentCards";
import {DayType} from "../../../redux/reducers/types";
import style from './Appointmets.module.scss'
import NewCalendarContainer from "../../new-calendar/NewCalendarContainer";

type PropsType = {
    appointments: DayType[],
    isLoad: boolean,
    getAppointmentInfo: () => void
}
const Appointments : FC<PropsType> = ({isLoad, appointments, getAppointmentInfo}) => {

    return (
        <div className={style.appointment}>
            <AppointmentCards isRow={false} appointments={appointments} isLoad={isLoad} getAppointment={getAppointmentInfo}/>
            <NewCalendarContainer/>
        </div>
    )
}

export default Appointments