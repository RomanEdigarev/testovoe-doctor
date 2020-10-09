import React, {FC} from "react";
import style from './Card.module.scss'
import avatar from '../header/img/avatar.jpg'
import {Link} from "react-router-dom";
import {AppointmentInfo} from "../../redux/reducers/types";


const Card: FC<AppointmentInfo> = ({date, address,doctorInfo,time}) => {
    return (
        <div className={style.card__container}>
            <div className={style.card__title}>
                {`${date} | ${time}`}
            </div>
            <div className={style.card__description}>
                {`${address}`}
            </div>
            <div className={style.card__doctorProfile}>
                <img src={doctorInfo.avatar} alt=""/>
                <div className={style.doctorProfile__information}>
                    <div className={style.doctorProfile__name}>
                        {`${doctorInfo.name}`}
                    </div>
                    <div className={style.doctorProfile__position}>
                        {`${doctorInfo.position}`}
                    </div>
                </div>
            </div>
            <Link to={'/'}>
                <div className={style.card__button}>
                    Отменить
                </div>
            </Link>


        </div>
    )
}

export default Card