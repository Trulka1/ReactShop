import React from "react";
import { AddNoteCreator, UpdateTextAreaCreator } from "../../redux/account-reducer";
import Account from "./Account";

const AccountContainer = (props) => {
    
    let state = props.store.getState().accountPage

    let onAddNote = () => {
        props.store.dispatch(AddNoteCreator())
    }

    let onUpdateTextArea = (text) => {
        let action = UpdateTextAreaCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Account
            updateTextArea={onUpdateTextArea}
            addNote={onAddNote}
            notesData={state.notesData}
            accountData = {state.accountData}
            newInputText={state.newInputText} />
    );
}

export default AccountContainer;