import React from 'react';

import style from '../../assets/style/scss/homepage/homepage.module.css'
import CategoryBar from "./category-bar/category-bar";
import Sliderr from "./main-content/slider/slider";
import {NavLink} from "react-router-dom";

const Homepage = () => {

    const slider_urls = require('../../data/sliders-image-src.json')

    return (
        <div className={style.main}>
            <div className={style.main__leftbar}>
                <CategoryBar/>
            </div>
            <div className={style.main__content}>
                <h3 className={style.title}><NavLink to={'/'}>Das Auto</NavLink></h3>
                <Sliderr data={slider_urls[0]}/>
                <h3 className={style.title}><NavLink to={'/'}>Porshe</NavLink></h3>
                <Sliderr data={slider_urls[1]}/>

            </div>

        </div>
    );
};

export default Homepage;
