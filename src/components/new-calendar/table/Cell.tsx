import React, {FC} from "react";
import style from './Cell.module.css'
import circle from './img/circle.png'

const Cell: FC = () => {
    const dates : number[] = []
    for(let i = 1; i < 31; i ++) {
        dates.push(i)
    }
    return (
        <div className={style.cell__container}>
            { dates.map(i =>
                <div className={style.cell}>
                    {i}
                    <div className={style.cell__sticker}><div>15</div></div>
                </div>
            )}
        </div>
    )
}

export default Cell