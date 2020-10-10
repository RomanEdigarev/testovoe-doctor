import React, {FC} from "react";
import AppointmentCards from "../../appointment-cards/AppointmentCards";
import {DayType} from "../../../redux/reducers/types";
import style from './CabinetPage.module.scss'
import ElectronCardContainer from "../../electron-card/ElectronCardsContainer";

type PropsType = {
    appointments: DayType[],
    isLoad: boolean,
    getAppointmentInfo: () => void
}
const CabinetPage: FC<PropsType> = ({isLoad, appointments, getAppointmentInfo}) => {
    return (
        <div className={style.cabinet__container}>
            <AppointmentCards getAppointment={getAppointmentInfo} appointments={appointments} isLoad={isLoad}
                              isRow={true}/>

            <div className={style.cabinet__subtitle}>Электронная карта</div>
            <div className={style.cabinet__electronCards}>
                <ElectronCardContainer/>
            </div>
        </div>
    )
}

export default CabinetPage