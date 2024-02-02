import React from "react";
import style from"./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = () =>{
    return (
        <div className={style.header}>
         <div className={style.headerwrapper}>
         <div  className={style.logo}>
            <img alt="description" id={style.lvlogo} src="https://i.pinimg.com/originals/86/75/75/867575c5faf2694b852c4cf756d5f51e.png"></img>
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
