import React, {useState} from 'react';
import CondensatorsItem from "../condensators/condensators-item/condensators-item";
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import TransistorsItem from "./transistors-item/transistors-item";
import ResistorsItem from "../resistors/resistor-item/resistors-item";

const Transistors = (props) => {
    const data = require('../../data/transistors.json')


    const [isNewModal, setNewModal] = useState(false);

    const adminValue = localStorage.getItem('admin');

    const admin = {
        key: +adminValue,
    }

    const onOpenNew = () => {
        setNewModal(true)
    }

    const onCloseNew = () => {
        setNewModal(false)
    }

    console.log(props.deleteItem, 'gggggggggggg')
    console.log(props.data, 'props data datat datat')
    console.log(props.editItem, 'edit Item edit')


    let item = props.data.map(i => <TransistorsItem setResID={props.setResID}
                                               data={i}
                                               infoDataMers={data}
                                               deleteItemMers={props.deleteItemMers}
                                               editItemMers={props.editItemMers}
                                               newItemMers={props.newItemMers}
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
