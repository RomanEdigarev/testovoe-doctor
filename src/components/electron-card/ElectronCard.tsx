import React, {FC} from "react";
import style from './ElectronCard.module.scss'
import {ElectronsCardsData} from "./ElectronsCardsData";


const ElectronCard: FC<ElectronsCardsData> = ({title, subtitle, icon}) => {
    return (
        <div className={style.electronCard__container}>
            <div className={style.electronCard__icon}>
                {icon}
            </div>
            <div className={style.electronCard__description}>
                <div className={style.electronCard__title}>
                    <span>{title}</span>
                </div>
                <div className={style.electronCard__subtitle}>
                    {
                        typeof subtitle === "string" ? subtitle :
                            subtitle.map(string => {
                                return (
                                    <ul>
                                        <li key={string}>{string}</li>
                                    </ul>
                                )
                            })

                    }
                </div>
            </div>
        </div>
    )
}

export default ElectronCard;