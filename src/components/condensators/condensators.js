import React from 'react';
import ResistorsItem from "../resistors/resistor-item/resistors-item";
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import CondensatorsItem from "./condensators-item/condensators-item";

const Condensators = (props) => {
    const data = require('../../data/condensators.json')

    let item = data.map(i => <CondensatorsItem setResID={props.setResID}
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

export default Condensators;