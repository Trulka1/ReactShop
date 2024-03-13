import React from "react";
import style from "./Support.module.css";
import Ticket from "../Ticket/Ticket";
import Message from "../Message/Message";
import { SendMessageCreator, UpdateMessageAreaCreator } from "../../redux/state";

const Support = (props) => {

    let state = props.store.getState().supportPage
    let newMessageBody = props.state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageCreator())
    }
    let onMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(UpdateMessageAreaCreator(body))
    }

    return (
        <div className={style.support}>
            <div className={style.supportwrapper}>
                <div className={style.tickets}>
                    {props.state.ticketsData.map((ticket) => (<Ticket ticketsData={props.ticketsData} key={ticket.id} ticketid={ticket.id} ticketheme={ticket.theme} />))}
                </div>
                <div className={style.chatcontainer}>
                    <div>
                        {props.state.messagesData.map((message) => (<Message messagesData={props.messagesData} key={message.id} messagetext={message.messagetext} />))}
                    </div>
                    <div>
                        <textarea
                            value={newMessageBody}
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