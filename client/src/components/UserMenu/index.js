import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import styles from './UserMenu.module.css';
import UserMenuModal from './UserMenuModal';
import {updateUserRequest} from '../../actions/actionCreators';

const UserMenu = (props) => {
    const [modalOpen, setOpen] = useState(false);
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
   
    const modalHandler = () => {
        setOpen(!modalOpen)
    }

    const submitData = () => {
         console.log('edit done');
         const firstName = firstNameInputRef.current.value;
         const lastName = lastNameInputRef.current.value;
         console.log(firstName, lastName);
         // це має призвести до відправки action
         props.updateUserRequest({
            firstName,
            lastName
         })
    }

    return (
        <>
        <div className={styles['user-menu-container']} onClick={modalHandler}>
            <img src={props.user?.avatar} className={styles.avatar}/>
          
            <p>{props.user?.firstName} {props.user?.lastName}</p>
        </div>
       {modalOpen && <UserMenuModal close={modalHandler}>
                {([editMode, setEdit])=>{

                    const submitEdit = () => {
                        submitData();
                        setEdit(!editMode);
                    }

                    return(
                        <div className={styles['modal-user-data']}>
                            <img src={props.user?.avatar} className={styles['full-avatar']}/>
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
                            <button>logOut</button>
                        </div>
                    )
                }}
       </UserMenuModal> }
        </>
    );
}

const mapStateToProps = ({user}) => ({user})

const mapDispatchToProps = {
    updateUserRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
