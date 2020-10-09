import React, {ReactElement} from "react";
import ReportIcon from "./icons/ReportIcon";
import LabIcon from "./icons/LabIcon";
import AddIcon from "./icons/AddIcon";
import ClockIcon from "./icons/ClockIcon";

export type ElectronsCardsData = {
    title: string,
    subtitle: string | string[]
    icon?: ReactElement
}

export const card1 : ElectronsCardsData = {
    title: 'Информация о пациенте',
    subtitle: ['Ваши личные данные', 'Рекомендации врачей', 'История болезней'],
    icon: <ReportIcon/>
}

export const card2 : ElectronsCardsData = {
    title: 'Результаты анализов',
    subtitle: 'Вы можете узнать здесь результаты своих анализов',
    icon: <LabIcon/>
}

export const card3 : ElectronsCardsData = {
    title: 'Добавить  информацию',
    subtitle: 'Добавляйте в свою электронную медицинскую карту новые данные',
    icon: <AddIcon/>
}

export const card4 : ElectronsCardsData = {
    title: 'История приемов',
    subtitle: 'Вся информация о полученных услугах за все время хранится здесь',
    icon: <ClockIcon/>
}