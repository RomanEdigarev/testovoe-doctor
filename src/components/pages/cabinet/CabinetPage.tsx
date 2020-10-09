import React, {FC} from "react";
import AppointmentCards from "../../appointment-cards/AppointmentCards";
import {DayType} from "../../../redux/reducers/types";

type PropsType = {
    appointments: DayType[],
    isLoad: boolean,
    getAppointmentInfo: () => void
}
const CabinetPage : FC<PropsType> = ({isLoad,appointments,getAppointmentInfo}) => {
    return (
        <div>
            <AppointmentCards getAppointment={getAppointmentInfo} appointments={appointments} isLoad={isLoad}/>
        </div>
    )
}

export default CabinetPage