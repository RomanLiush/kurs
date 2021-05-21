import React from 'react';
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import DatchykyItem from "./datchyky-item/datchyky-item";

const Datchyki = (props) => {
    const data = require('../../data/droseli.json')

    let item = data.map(i => <DatchykyItem setResID={props.setResID}
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

export default Datchyki;