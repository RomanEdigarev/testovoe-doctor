import React, {FC} from "react";
import style from './Navbar.module.scss'
import {Link} from "react-router-dom";
import HeartIcon from "./icons-components/HeartIcon";
import BookIcon from "./icons-components/BookIcon";
import SpeakIcon from "./icons-components/SpeakIcon";
import TestIcon from "./icons-components/TestIcon";
import Vector from "./icons-components/VectorIcon";
import HelpIcon from "./icons-components/HelpIcon";

const Navbar: FC = () => {
    return (
        <div className={style.navbar__container}>
            <div className={style.navbar__logo}>Логотип</div>
            <div className={style.navbar__link}>
                <HeartIcon/>
                Профиль
            </div>
            <div className={style.navbar__link}>
                <Vector/>
                Врачи и клиники
            </div>
            <div className={style.navbar__link}>
                <SpeakIcon/>
                Сообщения
            </div>
            <div className={style.navbar__link}>
                <TestIcon/>
                Тестирование
            </div>
            <div className={style.navbar__link}>
                <BookIcon/>
                Полезно знать
            </div>
            <div className={style.navbar__btn}>
                <Link to={'/zayavka'}>
                    Подать заявку
                </Link>
            </div>
            <div className={style.navbar__footer}>
                <HelpIcon/>
                <Link to={'/help'}>Помощь</Link>
            </div>
        </div>
    )
}

export default Navbar
