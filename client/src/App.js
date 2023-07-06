import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MyComponent from './MyComponent';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';



const initialState = {
    counter: 0,
    inputValue: 0
}

function rootReducer (state = initialState, action) {
  console.log(action);
  switch(action.type) {
             case 'INCREMENT' : {
                 return {
                     ...state,
                     counter: state.counter + state.inputValue
                 }
            }
            case 'DECREMENT' : {
                return {
                    ...state,
                    counter: state.counter - state.inputValue
                }
            }
            case 'INPUT_CHANGE': {
                return {
                    ...state,
                    inputValue: Number(action.payload)
                }
            }
            default: {
              return state
            }
        }
}

const enhancer = composeWithDevTools();

const store = createStore(rootReducer, enhancer);

function App() {
  // const [user, setUser] = useState(null);

  /*
  Нам потрібно навчитись перенаправляти юзера на інші сторінки з не-компонент
  Потрібен об'єкт history

  */

  // return (
  //  <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<Home sendUser={setUser}/>} />
  //     <Route path='/messenger' element={<Dashboard user={user}/>} />
  //   </Routes>
  //  </BrowserRouter>
  // );


  return (
    <Provider store={store}>
     <MyComponent />
    </Provider>
  )
}

export default App;
