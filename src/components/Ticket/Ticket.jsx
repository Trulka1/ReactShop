import React from "react";
import style from"./Ticket.module.css"
import { NavLink } from "react-router-dom";


const Ticket = (props) =>{
    return (
        <div className={style.ticketcontainer}>
        <NavLink to={`/support/${props.ticketid}`} className = { navData => navData.isActive ? style.active : style.ticketcontainer }>{props.ticketheme} </NavLink>
        </div>
    );
}

export default Ticket;