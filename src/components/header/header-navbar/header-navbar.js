import React from 'react';


import style from '../../../assets/style/scss/header/header-navbar/header-navbar.module.css'
import {NavLink} from "react-router-dom";

const HeaderNavbar = () => {
    return (
        <div className={style.main}>
            <div className={style.main__row_elements}>
                <ul>
                    <NavLink to={'/home'} activeClassName={style.act}><li>Home</li></NavLink>
                    <NavLink to={'/catalog'} activeClassName={style.act}><li>Product catalog</li></NavLink>
                    {/*<NavLink to={'/rules'} activeClassName={style.act}><li>Правила</li></NavLink>*/}
                    {/*<NavLink to={'/delivery'} activeClassName={style.act}><li>Доставка та оплата</li></NavLink>*/}
                    {/*<NavLink to={'/map'} activeClassName={style.act}><li>Карта Сайту</li></NavLink>*/}
                    {/*<NavLink to={'/projects'} activeClassName={style.act}><li>Наші Проекти</li></NavLink>*/}
                    {/*<NavLink to={'/responds'} activeClassName={style.act}><li>Відгуки</li></NavLink>*/}
                    {/*<NavLink to={'/contacts'} activeClassName={style.act}><li>Контакти</li></NavLink>*/}
        </ul>
</div>

</div>
);
};

export default HeaderNavbar;
