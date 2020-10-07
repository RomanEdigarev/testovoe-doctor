import React, {FC} from "react";
import style from './Navbar.module.scss'
import {Link} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <div className={style.navbar__container}>
            <div className={style.navbar__logo}>Логотип</div>
            <div className={style.navbar__link}>
                <img src='' alt=""/>
                Профиль
            </div>
            <div className={style.navbar__link}>Врачи и клиники</div>
            <div className={style.navbar__link}>Сообщения</div>
            <div className={style.navbar__link}>Тестирование</div>
            <div className={style.navbar__link}>Полезно знать</div>
            <div className={style.navbar__btn}>
                <Link to={'/zayavka'}>
                    Подать заявку
                </Link>
            </div>
        </div>
    )
}

export default Navbar
