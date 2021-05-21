import React from 'react';
import ModemItem from "../modems/modem-item/modem-item";
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import DroseliItem from "./droseli-item/droseli-item";

const Droseli = (props) => {
    const data = require('../../data/droseli.json')

    let item = data.map(i => <DroseliItem setResID={props.setResID}
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

export default Droseli;