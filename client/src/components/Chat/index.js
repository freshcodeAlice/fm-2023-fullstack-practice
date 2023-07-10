import React from 'react';
import styles from './Chat.module.css';
import {connect} from 'react-redux';
import ChatItem from './ChatItem';

const Chat = (props) => {
    return (
        <div className={styles.chat}>
           {props.currentChat && props.currentChat.messages.map(m => <ChatItem message={m} key={m._id}/>)}
        </div>
    );
}

const mapStateToProps = ({currentChat}) => ({currentChat})

export default connect(mapStateToProps)(Chat);
