import React, {FC} from "react";
import style from './MonthTitle.module.css'


const MonthTitle: FC = () => {

    return (
        <div className={style.monthTitleContainer}>
            <img src={"/common/img/back%20(3)%203.svg"} alt="prev"/>
            <div className={style.monthTitle}>Июнь, 2020</div>
            <img src='/common/img/next.png' alt="prev"/>
        </div>
    )
}

export default MonthTitle;