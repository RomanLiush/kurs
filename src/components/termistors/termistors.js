import React from 'react';
import ModemItem from "../modems/modem-item/modem-item";
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import TermistorItem from "./termistors-item/termistor-item";

const Termistors = (props) => {
    const data = require('../../data/termistors.json')

    let item = data.map(i => <TermistorItem setResID={props.setResID}
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

export default Termistors;