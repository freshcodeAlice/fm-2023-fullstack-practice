import React, {useState} from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
import styles from './Home.module.css';

function Home(props) {
   const [view, setView] = useState(true);

   const clickHandler = () => {
    setView(!view);
   }

   const buttonText = view ? "Sign Up" : "Sign In" ;
   
    return (
    <div className={styles['main-wrapper']}>
        <button onClick={clickHandler}>{buttonText}</button>
        {view ? <SignIn /> : <SignUp />}
    </div>
    )
}

export default Home;