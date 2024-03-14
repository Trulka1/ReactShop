import React from "react";
import s from "./Account.module.css";
import { AddNoteCreator, UpdateTextAreaCreator } from "../../redux/account-reducer";

const Account = (props) => {

    let nodeInput = React.createRef()

    let addNote = () => {
        debugger;
        props.dispatch(AddNoteCreator())
    }

    let updateTextArea = () => {
        let text = nodeInput.current.value;
        let action = UpdateTextAreaCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={s.account}>
            <div className={s.account_wrapper}>
                <div className={s.account_info}>
                    <div className={s.account_name}>{props.state.accountData[0].accountname}</div>
                    <div className={s.account_location}>{props.state.accountData[0].accountlocation}</div>
                </div>
                <div className={s.account_settings}>
                    <div className={s.text}>Поменять имя аккаунта</div>
                    <input className={s.input} placeholder="Введите новое имя" ></input>
                    <button className={s.button}>Изменить имя</button>
                </div>
                <div className={s.account_notes}>
                    <div className={s.text}>Мои заметки</div>
                    <input className={s.input} placeholder="Заметка" ref={nodeInput} onChange={updateTextArea} value={props.newInputText}></input>
                    <button className={s.button} onClick={addNote}>Добавить заметку</button>
                    <div className={s.notes_container}>
                        <div className={s.note}>
                            {props.state.notesData.map((note) => (
                                <div key={note.id}>
                                    {note.note}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Account;