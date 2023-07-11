import React, {useState} from 'react';
import { connect } from 'react-redux';
import styles from './MessageArea.module.css';
import {addMessageRequest} from '../../actions/actionCreators';

const MessageArea = (props) => {
    const [message, setMessage] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if(message) {
            const newMessage = {
                body: message,
                chatId: props.currentChat._id
            }
            props.addMessageRequest(newMessage);
            setMessage('');
        }
    }

    const changeHandler = ({target: {value}}) => {
        setMessage(value)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} 
            className={styles['form']}>
                <textarea
                name="message"
                value={message}
                onChange={changeHandler} 
                className={styles.textarea}/>
                <button className={styles['button-send']}>&#10146;</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({currentChat}) => ({currentChat})

const mapDispatchToProps = {
    addMessageRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);
