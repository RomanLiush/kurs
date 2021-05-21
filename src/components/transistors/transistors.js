import React from 'react';
import CondensatorsItem from "../condensators/condensators-item/condensators-item";
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import TransistorsItem from "./transistors-item/transistors-item";

const Transistors = (props) => {
    const data = require('../../data/transistors.json')

    let item = data.map(i => <TransistorsItem setResID={props.setResID}
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

export default Transistors;