import React, {FC} from "react";
import style from './Card.module.scss'
import avatar from '../header/img/avatar.jpg'
import {Link} from "react-router-dom";

const Card: FC = () => {
    return (
        <div className={style.card__container}>
            <div className={style.card__title}>
                Понедельник 15.06.20 | 15:30
            </div>
            <div className={style.card__description}>
                СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А
            </div>
            <div className={style.card__doctorProfile}>
                <img src={avatar} alt=""/>
                <div className={style.doctorProfile__information}>
                    <div className={style.doctorProfile__name}>
                        Малушко Т. Н.
                    </div>
                    <div className={style.doctorProfile__position}>
                        Хирургия
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