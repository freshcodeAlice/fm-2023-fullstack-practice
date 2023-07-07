import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import store from './store';

import {Provider} from 'react-redux';





function App() {
  

  /*
  Нам потрібно навчитись перенаправляти юзера на інші сторінки з не-компонент
  Потрібен об'єкт history

  */

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/messenger' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
   </Provider>
  );

}

export default App;


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