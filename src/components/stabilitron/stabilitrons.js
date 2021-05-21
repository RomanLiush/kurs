import React from 'react';
import TermistorItem from "../termistors/termistors-item/termistor-item";
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import StabilitronItem from "./stabilitron-item/stabilitron-item";

const Stabilitrons = (props) => {
    const data = require('../../data/stabilitrons.json')

    let item = data.map(i => <StabilitronItem setResID={props.setResID}
                                              data={i}
    />)
    return (
        <div className={style.main}>
            <div className={style.main__leftbar}>
                <CategoryBar/>
            </div>
            <div className={style.main__content}>
                {item}
            </div>
        </div>
    )
};

export default Stabilitrons;