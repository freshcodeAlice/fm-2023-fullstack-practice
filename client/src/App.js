import {unstable_HistoryRouter as HistoryRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import {connect} from 'react-redux';
import history from './history';
import {getUserDataRequest} from './actions/actionCreators';

/*
TODO: 
Реалізувати
- отримання всіх чатів юзера 
 
- Компонента чат має виводити всі повідомлення в цьому чаті
- Нове повідомлення має надсилатись на сервер, і додаватися до поточної історії повідомлень
- механізм logOut юзера

* - додавати юзерів до чату
* - видаляти юзерів в чату
* - присилати разом з повідомленнями файли


*/



function App(props) {
  

/// Якщо ми перезавантажились, і у нас нема об'єкта юзера, але в localStorage є токени - зробити запит на отримання об'єкта юзера

    useEffect(() => {
      if(!props.user) {
        props.getUserDataRequest()
      }
    
    }, []);



  /*
  Нам потрібно навчитись перенаправляти юзера на інші сторінки з не-компонент
  Потрібен об'єкт history

  */

  return (

      <HistoryRouter history={history}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/messenger' element={<Dashboard />} />
        </Routes>
      </HistoryRouter>

  );

}

const mapStateToProps = ({user})=> ({user});

const mapDispatchToProps = {getUserDataRequest}

export default connect(mapStateToProps, mapDispatchToProps)(App);


/*
Redux

store - сховище стану всього додатку
(Створюється за допомогою функції createStore)

dispatch - функція для доставки об'єкта action у функцію-редьюсер

reducer - просто чиста функція, яка приймає об'єкт state (поточний стан) і об'єкт action і повертає новий об'єкт стану

action - звичайний js-об'єкт з полем type яке вказує на те, що відбулося і яким чином reducer має змінити стан додатку


React-redux

<Provider> - реакт-компонента, яка огортає все дерево додатку і роздає значення store всім дітям

connect(mapStateToProps, mapDispatchToProps)(Component) 

mapStateToProps - - функція, що підписує Component на оновлення саме тої частини стейту, яка стосується компоненти (вказана частина стейту покладеться до пропсів компоненти)

mapDispatchToProps - функція або об'єкт, який вкладає у пропси компоненти огорнуті dispatch-ем actionCreators
*/