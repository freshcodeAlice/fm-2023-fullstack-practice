import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import {connect} from 'react-redux';
import history from './history';
import "react-toastify/dist/ReactToastify.css";



function App(props) {

  useEffect(()=>{
    const {body, type} = props.notification;

    toast[type](body, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }, [props.notification]);

  return (
    <>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/messenger' element={<Dashboard />} />
        </Routes>
      </HistoryRouter>
      <ToastContainer
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );

}

const mapStateToProps = ({notification}) => ({notification})

export default connect(mapStateToProps)(App);

