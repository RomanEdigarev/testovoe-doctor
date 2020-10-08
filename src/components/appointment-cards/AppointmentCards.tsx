import React, {FC} from "react";
import Card from "./Card";
import style from './AppointmentCards.module.scss'

const AppointmentCards: FC = () => {
    return (
        <div className={style.appointmentCard}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
export default AppointmentCards