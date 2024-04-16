import React from "react";
import style from"./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = () =>{
    return (
        <div className={style.header}>
         <div className={style.headerwrapper}>
         <div  className={style.logo}>
            <img alt="logo" id={style.lvlogo} src="https://lh3.google.com/u/0/d/1iSUfIkgQYw8GorBqHMn1lzCMEqxMfJ2z=w1583-h956-iv1"></img>
         </div>
         <div className={style.menu}>
            <div className={style.menuitem}> Каталог</div>
            <div className={style.menuitem}> Избранное</div>
            <NavLink to="/account" className = { navData => navData.isActive ? style.active : style.menuitem }>Личный кабинет</NavLink>
            <div className={style.menuitem}> Служба поддержки</div>
         </div>
         </div>
        </div>
    );
}

export default Header;
