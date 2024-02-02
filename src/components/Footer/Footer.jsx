import React from "react";
import style from "./Footer.module.css"

const Footer = () =>{
    return (
        <div className={style.footer}>
         <div className={style.footerwrapper}>
         <div className={style.footermenu}>
            <div className={style.menuitem}> Каталог</div>
            <div className={style.menuitem}> Избранное</div>
            <div className={style.menuitem}> Личный кабинет</div>
            <div className={style.menuitem}> Служба поддержки</div>
         </div>
         </div>
        </div>
    );
}

export default Footer;