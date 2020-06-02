import React from 'react';
import s from './dialogs.module.css';
import DialogItems from "./DialogItem/dialogsItem";
import Message from "./Message/message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogItems name={d.name} id={d.id} />);
    let messageElements = props.message.map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;