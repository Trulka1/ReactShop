import React from "react";
import s from "./Main.module.css"
import GoodsCard from "../GoodsCard/GoodsCard";


const Main = (props) => {
    return (
        <div className={s.main}>
            <div className={s.mainwrapper}>
                <div className={s.goodswrapper}>
                    {props.state.goodsData.map((goods) => (
                        <GoodsCard key={goods.id} goodsData = {props.goodsData} goodsname={goods.goodsname} goodsdiscripion={goods.goodsdiscripion} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Main;