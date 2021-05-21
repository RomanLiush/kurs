import React from 'react';

import style from '../../assets/style/scss/rules/rules.module.css'
import WayBlock from "../way-block/way-block";

const Rules = () => {
    return (
        <div className={style.main}>
            <WayBlock data={[
                {name: "Головна", url: "/home"},
                {name: "Правила", url: "/rules"}
                ]}/>


        </div>
    );
};

export default Rules;
