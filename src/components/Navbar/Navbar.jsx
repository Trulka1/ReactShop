import React from "react";
import s from"./Navbar.module.css"
import { NavLink } from "react-router-dom";
const Navbar = () =>{
    return (
        <div className={s.navbar}>
         <div className={s.navbarwrapper}>
         <div className={s.navbarmenu}>
            <div> 
            <NavLink to="/main" className = { navData => navData.isActive ? s.active : s.menuitem }>Каталог</NavLink>
            </div>
            <div className={s.menuitem} > Избранное</div>
            <NavLink to="/account" className = { navData => navData.isActive ? s.active : s.menuitem }>Личный кабинет</NavLink>
            <div > 
            <NavLink to="/Support" className = { navData => navData.isActive ? s.active : s.menuitem }>Служба поддержки</NavLink>
            </div>
         </div>
         </div>
        </div>
    );
}

export default Navbar;