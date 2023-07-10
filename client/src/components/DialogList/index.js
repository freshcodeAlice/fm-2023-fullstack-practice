import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { getCurrentChatRequest} from '../../actions/actionCreators';
import styles from './DialogList.module.css';
import {connect} from 'react-redux';

const DialogList = (props) => {
    const navigate = useNavigate();

    const changeCurrentChat = (chatId) => {
        /// згенерувати action, який змінить поточний чат
        props.getCurrentChatRequest(chatId);
    }

    const mapList = (chat) => <li key={chat._id} onClick={()=>{changeCurrentChat(chat._id)}}>{chat.name}</li>

    return (
        <div className={styles.dialog}>
            <ul>
                {props.chatList && props.chatList.map(mapList)}
            </ul>
        </div>

    );
}

const mapStateToProps = ({chatList}) => ({chatList});

const mapDispatchToProps = {
    getCurrentChatRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);
