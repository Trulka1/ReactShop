import React from "react";
import s from "./Account.module.css";

const Account = (props) => {

    let nodeInput = React.createRef()
    
    let onAddNote = () => {
        props.addNote()
    }

    let onUpdateTextArea = () => {
        let text = nodeInput.current.value;
        props.updateTextArea(text)
    }

    return (
        <div className={s.account}>
            <div className={s.account_wrapper}>
                <div className={s.account_info}>
                    <div className={s.account_name}>{props.accountData[0].accountname}</div>
                    <div className={s.account_location}>{props.accountData[0].accountlocation}</div>
                </div>
                <div className={s.account_settings}>
                    <div className={s.text}>Поменять имя аккаунта</div>
                    <input className={s.input} placeholder="Введите новое имя" ></input>
                    <button className={s.button}>Изменить имя</button>
                </div>
                <div className={s.account_notes}>
                    <div className={s.text}>Мои заметки</div>
                    <input className={s.input} placeholder="Заметка" ref={nodeInput} onChange={onUpdateTextArea} value={props.newInputText}></input>
                    <button className={s.button} onClick={onAddNote}>Добавить заметку</button>
                    <div className={s.notes_container}>
                        <div className={s.note}>
                            {props.notesData.map((note) => (
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