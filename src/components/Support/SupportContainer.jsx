import React from "react";
import { SendMessageCreator, UpdateMessageAreaCreator } from "../../redux/support-reducer";
import Support from "./Support";

const SupportContainer = (props) => {

    let state = props.store.getState().supportPage

    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageCreator())
    }
    let onMessageChange = (body) => {
        props.store.dispatch(UpdateMessageAreaCreator(body))
    }

    return (
        <Support 
        UpdateMessageArea = {onMessageChange} 
        SendMessage = {onSendMessageClick} 
        ticketsData ={state.ticketsData}
        messagesData = {state.messagesData}
        newMessageBody = {state.newMessageBody}
        />
    );
}

export default SupportContainer;