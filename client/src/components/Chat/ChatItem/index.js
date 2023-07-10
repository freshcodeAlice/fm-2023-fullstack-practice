import React from 'react';
import {connect} from 'react-redux';
import styles from '../Chat.module.css';
import cx from 'classnames';


const ChatItem = (props) => {
    const {user, message} = props;
    const cn = cx(styles.message, {
        [styles['author-message']]: user._id === message.author
    });
    
    return (
        <div className={cn}>
           <p>{props.message.body}</p>
        </div>
    );
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps)(ChatItem);
