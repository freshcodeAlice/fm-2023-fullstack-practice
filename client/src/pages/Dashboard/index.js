import React, {useEffect} from 'react';
import Chat from '../../components/Chat';
import DialogList from '../../components/DialogList';
import MessageArea from '../../components/MessageArea';
import UserMenu from '../../components/UserMenu';
import styles from './Dashboard.module.css';
import {connect} from 'react-redux';
import {getUserDataRequest, getChatListRequest} from '../../actions/actionCreators';
import ChatMenu from '../../components/ChatMenu';

const Dashboard = (props) => {


    /// Якщо ми перезавантажились, і у нас нема об'єкта юзера, але в localStorage є токени - зробити запит на отримання об'єкта юзера

    useEffect(() => {
        if(!props.user) {
          props.getUserDataRequest()
        } else {
            props.getChatListRequest()
        }
      
      }, []);
  
  

    return (
        <main className={styles.main}>
            <UserMenu />
            <ChatMenu />
            {/* <div className={styles.aside}> */}
            <DialogList />
            {/* </div> */}
            <section className={styles.container}> 
                <Chat />
                <MessageArea />
             </section>
        </main>
     
    );
}


const mapStateToProps = ({user})=> ({user});

const mapDispatchToProps = {getUserDataRequest, getChatListRequest}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
