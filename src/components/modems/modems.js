import React, {useState} from 'react';
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import ModemItem from "./modem-item/modem-item";
import NewAutoModal from "../resistors/resistor-item/newAutoModal";

const Modems = (props) => {
    const data = require('../../data/modems.json')


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


    let item = props.data.map(i => <ModemItem setResID={props.setResID}
                                              data={i}
                                              infoData={data}
                                              deleteItemVolk={props.deleteItemVolk}
                                              editItemVolk={props.editItemVolk}
                                              newItemVolk={props.newItemVolk}
    />)
    return (
        <div>
            <div className={style.main}>
                <div className={style.main__leftbar}>
                    <CategoryBar/>
                </div>
                <div className={style.main__content}>
                    {item}
                </div>
            </div>
            <div className={'btn btn-primary'}
                 style={{position:"relative", left: "80.7vw", top:"2rem"}}
                 onClick={() => onOpenNew()}
            >
                Створити товар
            </div>
            <NewAutoModal onClose={onCloseNew} open={isNewModal} data={props.data} newItem={props.newItemVolk}/>
        </div>
    )
};

export default Modems;
