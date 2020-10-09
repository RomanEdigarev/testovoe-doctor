import React, {FC} from "react";
import style from './ElectronCard.module.scss'
import LabIcon from "./icons/LabIcon";

const ElectronCard : FC = () => {
    return (
        <div className={style.electronCard__container}>
            <div className={style.electronCard__icon}>
                <LabIcon/>
            </div>
            <div className={style.electronCard__description}>
                <div className={style.electronCard__title}>
                    <span>Результаты анализов</span>
                </div>
                <div className={style.electronCard__subtitle}>
                    Вы можете узнать здесь результаты своих анализов
                </div>

            </div>
        </div>
    )
}

export default ElectronCard;