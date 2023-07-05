import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import styles from './Home.module.css';

function Home(props) {
   const [view, setView] = useState(true);
   const navigate = useNavigate();

    const sendApiRequest = (response) => {
        response.then(({data: {data}}) => {
            props.sendUser(data);
            navigate('/messenger');
        })
    }



   const clickHandler = () => {
    setView(!view);
   }

   const buttonText = view ? "Sign Up" : "Sign In" ;
   
    return (
    <div className={styles['main-wrapper']}>
        <button onClick={clickHandler}>{buttonText}</button>
        {view ? <SignIn sendData={sendApiRequest}/> : <SignUp sendData={sendApiRequest}/>}
    </div>
    )
}

export default Home;