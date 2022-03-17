import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    updateNewMessageBody: (action?: any) => void
    sendMessage: (action?: any) => void
    dialogsPage: DialogsPageType
}

export function Dialogs(props: DialogsPropsType) {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e: any) => {
        let newBody = e.target.value;
        props.updateNewMessageBody(newBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}