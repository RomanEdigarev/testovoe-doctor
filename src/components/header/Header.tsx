import React, {FC} from "react";
import style from './Header.module.scss'
import search from './img/search.png'
import bell from './img/bell.png'
import eye from './img/eye.png'
import avatar from './img/avatar.jpg'
import openMenu from './img/open-menu.png'
import {Link} from "react-router-dom";

const Header: FC = () => {
    return (
        <div className={style.header__container}>
            <Link to={'/profile'}><div className={style.header__title}>Мой профиль</div></Link>
            <div className={style.header__menu}>
                <div className={style.header__buttons}>
                    <Link to={'/search'}><button className={style.header__button}><img src={search} alt="search"/></button></Link>
                    <Link to={'/notif'}><button className={style.header__button}><img src={bell} alt="bell"/></button></Link>
                    <Link to={'/profile'}><button className={style.header__button}><img src={eye} alt="eye"/></button></Link>
                </div>
                <div className={style.header__profile}>
                    <Link to={'/profile'}><div><img src={avatar} alt="profileAvatar"/></div></Link>
                </div>
                <button className={style.header__button}><img src={openMenu} alt="openMenu"/></button>
            </div>
        </div>
    )
}

export default Header