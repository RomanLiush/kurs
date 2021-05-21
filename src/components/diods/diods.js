import React from 'react';
import StabilitronItem from "../stabilitron/stabilitron-item/stabilitron-item";
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import DiodItem from "./diod-item/diod-item";

const Diods = (props) => {
    const data = require('../../data/diods.json')

    let item = data.map(i => <DiodItem setResID={props.setResID}
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

export default Diods;