import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import {configureStore} from '@reduxjs/toolkit';

 const sagaMiddleware = createSagaMiddleware();


 const store = configureStore({
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
    reducer: rootReducer
 });

 sagaMiddleware.run(rootSaga);

// const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

// const store = createStore(rootReducer, enhancer);
 


export default store;