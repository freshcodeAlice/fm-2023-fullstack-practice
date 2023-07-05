import React, {useEffect, useState} from 'react';
import {getUserChats} from '../../api';
import { useNavigate } from "react-router-dom";
import styles from './DialogList.module.css';

const DialogList = () => {
    const [list, setList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
       getUserChats()
       .then(({data: {data}}) => {
        setList(data);
       })
       .catch(err => {
        console.log(err);
 //       navigate('/');
       })
    }, []);

    const mapList = (chat) => <li key={chat._id} >{chat.name}</li>

    return (
        <div className={styles.dialog}>
            <ul>
                {list && list.map(mapList)}
            </ul>
        </div>

    );
}

export default DialogList;
