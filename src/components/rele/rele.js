import React from 'react';
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import ReleItem from "./rele-item/rele-item";

const Rele = (props) => {
    const data = require('../../data/rele.json')

    let item = data.map(i => <ReleItem setResID={props.setResID}
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

export default Rele;