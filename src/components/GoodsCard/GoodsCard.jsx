import React from "react";
import style from"./GoodsCard.module.css"

const GoodsCard = (props) =>{
    return (
        <div className={style.GoodsCard}>
         <div className={style.goodscardwrapper}>
                <div className={style.goodsname}>{props.goodsname}</div>
                <div className={style.goodsname}>{props.goodsdiscripion}</div>
         </div>
        </div>
        
    );
}

export default GoodsCard;