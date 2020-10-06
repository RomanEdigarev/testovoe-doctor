import React, {FC} from "react";
import Row from "./Row";
import Cell from "./Cell";

type PropsType = {
    currentMonth : Date
}

const TableContainer : FC<PropsType> = ({currentMonth}) => {
    return (
        <>
            <Row currentMonth={currentMonth}/>
            <Cell currentMonth={currentMonth}/>
        </>
    )
}
export default TableContainer;