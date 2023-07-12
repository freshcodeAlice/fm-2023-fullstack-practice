import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import styles from './UserMenu.module.css';
import ModalWindow from '../ModalWindow';
import {updateUserRequest, logOut} from '../../actions/actionCreators';
import CONSTANTS from '../../constants';

const UserMenu = (props) => {
    const [modalOpen, setOpen] = useState(false);
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
   
    const modalHandler = () => {
        setOpen(!modalOpen)
    }

    const submitData = () => {
         const firstName = firstNameInputRef.current.value;
         const lastName = lastNameInputRef.current.value;
         console.log(firstName, lastName);
         // це має призвести до відправки action
         props.updateUserRequest({
            firstName,
            lastName
         })
    }

    const imageSrc = props.user.imagePath || CONSTANTS.USER_PLACEHOLDER;

    return (
        <>
        <div className={styles['user-menu-container']} onClick={modalHandler}>
            <img src={imageSrc} className={styles.avatar}/>
          
            <p>{props.user?.firstName} {props.user?.lastName}</p>
        </div>
       {modalOpen && <ModalWindow close={modalHandler}>
                {([editMode, setEdit])=>{

                    const submitEdit = () => {
                        submitData();
                        setEdit(!editMode);
                    }

                    return(
                        <>
                            <img src={props.user?.imagePath} className={styles['full-avatar']}/>
                            <h1>
                                {props.user?.firstName} {props.user?.lastName}                           
                            </h1>
                            <div>
                                {editMode && <input 
                                type="text" 
                                defaultValue={props.user.firstName}
                                ref={firstNameInputRef}
                                />}
                                {editMode && <input 
                                type="text" 
                                defaultValue={props.user.lastName}
                                ref={lastNameInputRef}
                                />}
                            </div>
                            {editMode ? 
                                <button onClick={submitEdit}>Save</button> : 
                                <button onClick={()=>{setEdit(!editMode)}}>Edit</button>}
                            <button onClick={props.logOut}>logOut</button>
                        </>
                    )
                }}
       </ModalWindow> }
        </>
    );
}

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = {
    updateUserRequest,
    logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
