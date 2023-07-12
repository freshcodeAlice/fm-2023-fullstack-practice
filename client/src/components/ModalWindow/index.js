import React, {useState} from 'react';
import styles from './ModalWindow.module.css';

const ModalWindow = (props) => {
    const [editMode, setEdit] = useState(false);

    const editHandler = () => {
        setEdit(!editMode);
    }

    const closeHandler = (event) => {
        if(event.currentTarget === event.target) {
            props.close();
        }
    }

    return (
        <div className={styles['background']} onClick={closeHandler}>
            <div className={styles['modal-container']}>
                <button onClick={closeHandler} className={styles['button-close']}>X</button>
                <div className={styles['modal-data']}>
                {props.children([editMode, setEdit])}
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;
