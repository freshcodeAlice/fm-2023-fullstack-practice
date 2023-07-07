import React, {useState} from 'react';
import { connect } from 'react-redux';
import styles from './MessageArea.module.css';
import {addMessage} from '../../actions/actionCreators';

const MessageArea = () => {
    const [message, setMessage] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        const newMessage = {
            body: message,
            chatId: props.currentChat._id
        }
        props.addMessage(newMessage);
    }

    const changeHandler = ({target: {value}}) => {
        setMessage(value)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} >
                <textarea
                name="message"
                value={message}
                onChange={changeHandler} />
                <button>Submit</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({currentChat}) => ({currentChat})

const mapDispatchToProps = {
    addMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);
