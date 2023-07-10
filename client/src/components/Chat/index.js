import React from 'react';
import styles from './Chat.module.css';
import {connect} from 'react-redux'

const Chat = (props) => {
    return (
        <div className={styles.chat}>
           {props.currentChat && props.currentChat.messages.map(m => <li>{m.body}</li>)}
        </div>
    );
}

const mapStateToProps = ({currentChat}) => ({currentChat})

export default connect(mapStateToProps)(Chat);
