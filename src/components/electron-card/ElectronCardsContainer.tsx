import React, {FC} from "react";
import ElectronCard from "./ElectronCard";
import {card1, card2, card3, card4} from "./ElectronsCardsData";

const ElectronCardContainer : FC = () => {
    return (
        <>
            <ElectronCard {...card1}/>
            <ElectronCard {...card2}/>
            <ElectronCard {...card3}/>
            <ElectronCard {...card4}/>
        </>
    )
}
export default ElectronCardContainer