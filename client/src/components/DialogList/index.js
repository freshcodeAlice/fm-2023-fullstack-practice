import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {getChatListRequest} from '../../actions/actionCreators';
import styles from './DialogList.module.css';
import {connect} from 'react-redux';

const DialogList = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        props.getChatListRequest();
    }, [])

    const mapList = (chat) => <li key={chat._id} >{chat.name}</li>

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
    getChatListRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);
