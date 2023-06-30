import React, {useState} from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

function Home(props) {
   const [view, setView] = useState(true);

   const clickHandler = () => {
    setView(!view);
   }

   const buttonText = view ? "Sign Up" : "Sign In" ;
   
    return (
    <div>
        <button onClick={clickHandler}>{buttonText}</button>
        {view ? <SignIn /> : <SignUp />}
    </div>
    )
}

export default Home;