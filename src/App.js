import logo from './logo.svg';
import './App.css';
import Header from './Component/Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/SignInSignOut/Login/Login';
import Register from './Component/SignInSignOut/Register/Register';
import MyItem from './Component/Pages/MyItem/MyItem';
import Home from './Component/Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;
