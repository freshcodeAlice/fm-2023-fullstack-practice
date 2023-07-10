import React, {useEffect, useState} from 'react';
import { getCurrentChatRequest} from '../../actions/actionCreators';
import styles from './DialogList.module.css';
import cx from 'classnames';
import {connect} from 'react-redux';

const DialogList = (props) => {

    const changeCurrentChat = (chatId) => {
        /// згенерувати action, який змінить поточний чат
        props.getCurrentChatRequest(chatId);
    }

    const mapList = (chat) => {
        const cn = cx(styles['dialog-item'], {
            [styles['current-dialog']]: chat._id === props.currentChat?._id
        });
       return  <li 
        key={chat._id} 
        onClick={()=>{changeCurrentChat(chat._id)}}
        className={cn}>{chat.name}</li>
    }
           

    return (
        <div className={styles.dialog}>
            <ul>
                {props.chatList && props.chatList.map(mapList)}
            </ul>
        </div>

    );
}

const mapStateToProps = ({chatList, currentChat}) => ({chatList, currentChat});

const mapDispatchToProps = {
    getCurrentChatRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);
