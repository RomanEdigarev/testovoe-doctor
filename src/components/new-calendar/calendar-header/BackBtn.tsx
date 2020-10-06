import React, {FC} from "react";
import style from './Btn.module.css'


type PropsType = {
    goToPrevMonth : () => void
}
const BackBtn : FC<PropsType> = ({goToPrevMonth}) => {
    return (
        <div className={style.btn} onClick={()=>goToPrevMonth()}>
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id="clip0">
                        <rect id="svg_1" fill="white" height="14" width="14"/>
                    </clipPath>
                </defs>
                <g>
                    <title>background</title>
                    <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
                </g>
                <g>
                    <title>Layer 1</title>
                    <g id="svg_2" clip-path="url(#clip0)">
                        <path id="svg_3" fill="white"
                              d="m4.52934,7.00324l6.08376,-6.08378c0.2103,-0.21035 0.2103,-0.55139 0,-0.76174c-0.2104,-0.21029 -0.5514,-0.21029 -0.76172,0l-6.46466,6.46464c-0.21029,0.21036 -0.21029,0.55139 0,0.76175l6.46466,6.46469c0.21402,0.2066 0.55502,0.2007 0.76172,-0.0133c0.2016,-0.2088 0.2016,-0.5397 0,-0.7485l-6.08376,-6.08376z"/>
                    </g>
                </g>
            </svg>
        </div>

    )
}
export default BackBtn