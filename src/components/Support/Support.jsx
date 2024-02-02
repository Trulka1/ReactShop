import React from "react";
import style from "./Support.module.css";
import Ticket from "../Ticket/Ticket";
import Message from "../Message/Message";

const Support = (props) => {
    

    return (
        <div className={style.support}>
            <div className={style.supportwrapper}>
                <div className={style.tickets}>
                    {props.state.ticketsData.map((ticket) => (<Ticket ticketsData = {props.ticketsData} key={ticket.id} ticketid={ticket.id} ticketheme={ticket.theme} />))}
                </div>
                <div className={style.chatcontainer}>
                    <div>
                        {props.state.messagesData.map((message) => (<Message messagesData = {props.messagesData} key={message.id} messagetext={message.messagetext} />))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Support;