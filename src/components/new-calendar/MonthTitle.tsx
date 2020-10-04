import React, {FC} from "react";
import style from './MonthTitle.module.css'
import prev from './img/back.svg'
import next from './img/next.svg'
import NextBtn from "./NextBtn";


const MonthTitle: FC = () => {

    return (
        <div className={style.monthTitleContainer}>
            <img className={style.nextBtn} src={prev} alt="prev"/>
            <div className={style.monthTitle}>Июнь, 2020</div>
            <NextBtn/>
        </div>
    )
}

export default MonthTitle;