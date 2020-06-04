import React from 'react';
import s from './../dialogs.module.css';


const Message = (props) => {
    return (
        <div className={s.message}>
            <div>
                <div>
                    {props.message}
                </div>
            </div>
        </div>
    )
};

export default Message;