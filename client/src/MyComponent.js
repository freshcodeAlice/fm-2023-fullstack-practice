import React, {useReducer} from 'react';
import {connect} from 'react-redux';

const ACTION_TYPES = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    INPUT_CHANGE: 'INPUT_CHANGE'
}

// function reducer(state, action) {
//     switch(action.type) {
//         case 'INCREMENT' : {
//             return {
//                 ...state,
//                 counter: state.counter + state.inputValue
//             }
//         }
//         case 'DECREMENT' : {
//             return {
//                 ...state,
//                 counter: state.counter - state.inputValue
//             }
//         }
//         case 'INPUT_CHANGE': {
//             return {
//                 ...state,
//                 inputValue: Number(action.payload)
//             }
//         }
//     }
// }

const incrementActionCreator = () => {
    return {
        type: ACTION_TYPES.INCREMENT
    }
}

const decrementActionCreator = () => {
    return {
        type: ACTION_TYPES.DECREMENT
    }
}

const inputActionCreator = ({target: {value}}) => {
    return {
        type: ACTION_TYPES.INPUT_CHANGE,
        payload: value
    }
}

function MyComponent(props) {

console.log(props);

    return (
    <div>
        <h1>{props.counter}</h1>
        <input type="range" value={props.inputValue} onChange={props.changeStep}/>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
    </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(incrementActionCreator()),
//         decrement: () => dispatch(decrementActionCreator()),
//         changeStep: (event) => dispatch(inputActionCreator(event.target.value))
//     }
// }

const mapDispatchToProps = {
    increment: incrementActionCreator,
    decrement: decrementActionCreator,
    changeStep: inputActionCreator
}

const HOC = connect(mapStateToProps, mapDispatchToProps);
const ComponentWithStore = HOC(MyComponent);

export default ComponentWithStore;



/*
Алгоритим дій для налаштування Redux

1. Створення і налаштування сховища

2.  Створення функції-редьюсера (яка передається ф.createStore)

3. Створити Provider і роздати значення store всім компонентам, які до нього підключаться (всім дітям додатку)

4. Підключення компоненти до стору (підписка на оновлення)

const HOC = connect(mapStateToProps, mapDispatchToProps)
HOC(MyComponent)

connect(mapStateToProps, mapDispatchToProps)(MyComponent)



mapStateToProps - функція, яка приймає весь об'єкт стану і повертає ту його частину, яка стосується поточної компоненти,
значення зі стану вкладаються компоненті у пропси

mapDispatchToProps - або функція, що повертає об'єкт, або об'єкт,
що містить actionCreator-и, огорнуті викликом dispatch

*/


/*
Каррування 

function sum(a, b, c) {
    return a+b+c
}


function sum2(a) {
    return function(b, c) {
        return a+b+c
    }
}

const s1 = sum2(2);
s1(3,4); //2+3+4

function sum3(a) {
    return function(b){
        return function(c) {
            return a+b+c;
        }
    }
}

const s3 = sum3(5);
s4 = s3(6);
s4(7) //5+6+7


const res = sum3(8)(9)(10)


// Каррування - процес розбиття функції, яка приймає n аргументів на n функцій, які приймають меншу кількість аргументів

//protokol, domen, port, path, query

function createAPIaddress(protokol) {
    return function (domen) {
        return function (port) {
            return function (path) {
                return function (query ='') {
                    return `${protokol}://${domen}:${port}/${path}?${query}`
                }
            }
        }
    }
}

const api_Base = createAPIaddress('http')('myhost');
const api5000 = api_Base(5000);
const api3000 = api_Base(3000);


const res1 = api5000('/api/path')('key1=value1'); /// http://myhost:5000/api/path?key1=value1 
const res2 = api3000('/api')(''); //http://myhost:3000/api?


*/