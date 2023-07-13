import React, {useState} from 'react';
import styles from './ChatMenu.module.css';
import {connect} from 'react-redux';
import ModalWindow from '../ModalWindow';
import CONSTANTS from '../../constants';

const ChatMenu = (props) => {
    const [modalOpen, setOpen] = useState(false);

    const modalHandler = () => {
        setOpen(!modalOpen)
    } 

    const imageSrc = props.currentChat?.imagePath || CONSTANTS.CHAT_PLACEHOLDER;

    return (
        <>
        <div className={styles['menu-container']} onClick={modalHandler}>
           {props.currentChat && <img className={styles['chat-img']} src={imageSrc}/> }
            <p>{props.currentChat?.name}</p>
        </div>
        {
            modalOpen &&   
            <ModalWindow close={modalHandler}>
            {([editMode, setEdit])=>{
                return (
                    <>
                    <img className={styles['chat-img']} src={imageSrc}/>
                    <h1>{props.currentChat?.name}</h1>
                    <p>Chat members:</p>
                    <ul>
                    {props.currentChat?.members.map(member => <li>{member}</li>)}
                    </ul>
                    </>
                )
            }}
        </ModalWindow>
        }
      
        </>
    );
}

const mapStateToProps = ({currentChat}) => ({currentChat});

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMenu);
