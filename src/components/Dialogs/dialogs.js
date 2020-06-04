import React from 'react';
import s from './dialogs.module.css';
import DialogItems from "./DialogItem/dialogsItem";
import Message from "./Message/message";
import {createRef} from "react/cjs/react.production.min";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    let dialogsElements = props.state.dialogs.map( d => <DialogItems name={d.name} id={d.id} />);
    let messageElements = props.state.messages.map(m => <Message message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea placeholder="Enter the message text..." cols="40" rows="8" ref={newMessageElement}>

                </textarea>
            </div>
            <div>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    )
};

export default Dialogs;