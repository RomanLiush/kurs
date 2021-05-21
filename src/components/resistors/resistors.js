import React, {useState} from 'react';
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import ResistorsItem from "./resistor-item/resistors-item";



const Resistors = (props) => {

    const data = require('../../data/resistors.json')
    console.log(props.deleteItem, 'gggggggggggg')
    console.log(props.data, 'props data datat datat')
    let item = props.data.map(i => <ResistorsItem setResID={props.setResID}
                                            data={i}
                                            infoData={data}
                                            deleteItem={props.deleteItem}
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
}

export default Resistors;
