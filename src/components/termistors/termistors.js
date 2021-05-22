import React, {useState} from 'react';
import ModemItem from "../modems/modem-item/modem-item";
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import TermistorItem from "./termistors-item/termistor-item";
import NewAutoModal from "../resistors/resistor-item/newAutoModal";

const Termistors = (props) => {
    const data = require('../../data/termistors.json')

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

    let item = props.data.map(i => <TermistorItem setResID={props.setResID}
                                                  data={i}
                                                  infoData={data}
                                                  deleteItemZAZ={props.deleteItemZAZ}
                                                  editItemZAZ={props.editItemZAZ}
                                                  newItemZAZ={props.newItemZAZ}
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
            <NewAutoModal onClose={onCloseNew} open={isNewModal} data={props.data} newItem={props.newItemZAZ}/>
        </div>
    )
};

export default Termistors;
