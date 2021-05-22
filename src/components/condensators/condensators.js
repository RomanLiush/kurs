import React, {useState} from 'react';
import ResistorsItem from "../resistors/resistor-item/resistors-item";
import style from "../../assets/style/scss/resistors/resistors.module.css";
import CategoryBar from "../homepage/category-bar/category-bar";
import CondensatorsItem from "./condensators-item/condensators-item";
import NewAutoModal from "../resistors/resistor-item/newAutoModal";

const Condensators = (props) => {

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

    const data = require('../../data/condensators.json')

    let item = props.data.map(i => <CondensatorsItem setResID={props.setResID}
                                                     data={i}
                                                     infoData={data}
                                                     deleteItemVolvo={props.deleteItemVolvo}
                                                     editItemVolvo={props.editItemVolvo}
                                                     newItemVolvo={props.newItemVolvo}
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
            <NewAutoModal onClose={onCloseNew} open={isNewModal} data={props.data} newItem={props.newItem}/>
        </div>
    )
};

export default Condensators;
