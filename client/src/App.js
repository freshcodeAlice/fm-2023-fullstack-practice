import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


function App() {
  const [user, setUser] = useState(null);

  /*
  Нам потрібно навчитись перенаправляти юзера на інші сторінки з не-компонент
  Потрібен об'єкт history

  */

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home sendUser={setUser}/>} />
      <Route path='/messenger' element={<Dashboard user={user}/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
