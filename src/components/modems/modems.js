import React from 'react';
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import ModemItem from "./modem-item/modem-item";

const Modems = (props) => {
    const data = require('../../data/modems.json')

    let item = data.map(i => <ModemItem setResID={props.setResID}
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

export default Modems;