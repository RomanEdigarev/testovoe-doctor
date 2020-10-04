import React from "react";
import style from './Btn.module.css'

const NextBtn = () => {
    return (
        <div className={style.nextBtn}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <g clip-path="url(#clip0)">
                    <path
                          d="M10.1778 6.99676L9.82422 7.35032L3.74046 13.4341C3.74045 13.4341 3.74044 13.4341 3.74043 13.4341C3.72536 13.4492 3.72537 13.4737 3.74046 13.4888L3.38727 13.8419L3.74035 13.4886C3.75551 13.5038 3.78003 13.5038 3.79512 13.4887L10.2597 7.02414L10.1778 6.99676ZM10.1778 6.99676L9.82422 6.64321M10.1778 6.99676L9.82422 6.64321M9.82422 6.64321L3.74527 0.564275C3.73208 0.549258 3.73246 0.526419 3.74655 0.511831C3.76098 0.496916 3.78448 0.496083 3.79991 0.509641L10.2597 6.96939M9.82422 6.64321L10.2597 6.96939M10.2597 6.96939L10.2597 6.96945C10.2748 6.98454 10.2748 7.00899 10.2597 7.02408L10.2597 6.96939Z"
                          fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect  width="14" height="14" fill="white" transform="translate(14 14) rotate(-180)"/>
                    </clipPath>
                </defs>
            </svg>
        </div>


    )
}

export default NextBtn