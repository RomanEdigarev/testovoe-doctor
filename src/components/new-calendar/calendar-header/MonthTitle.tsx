import React, {FC} from "react";
import style from './MonthTitle.module.css'
import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";


const MonthTitle: FC = () => {

    return (
        <div className={style.monthTitleContainer}>
            <BackBtn/>
            <div className={style.monthTitle}>Июнь, 2020</div>
            <NextBtn/>
        </div>
    )
}

export default MonthTitle;