import React from "react";
import style from "./Support.module.css";
import Ticket from "../Ticket/Ticket";
import Message from "../Message/Message";

const Support = (props) => {

    let onSendMessageClick = () => {
        props.SendMessage()
    }
    let onMessageChange = (e) => {
        let body = e.target.value
        props.UpdateMessageArea(body)
    }

    return (
        <div className={style.support}>
            <div className={style.supportwrapper}>
                <div className={style.tickets}>
                    {props.ticketsData.map((ticket) => (<Ticket ticketsData={props.ticketsData} key={ticket.id} ticketid={ticket.id} ticketheme={ticket.theme} />))}
                </div>
                <div className={style.chatcontainer}>
                    <div>
                        {props.messagesData.map((message) => (<Message messagesData={props.messagesData} key={message.id} messagetext={message.messagetext} />))}
                    </div>
                    <div>
                        <textarea
                            value={props.newMessageBody}
                            onChange={onMessageChange}
                            placeholder="Ваше сообщение"
                        >

                        </textarea>
                    </div>
                    <div>
                        <button
                            onClick={onSendMessageClick}>
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Support;