import './App.css';
import Header from './Component/Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/SignInSignOut/Login/Login';
import Register from './Component/SignInSignOut/Register/Register';
import MyItem from './Component/Pages/MyItem/MyItem';
import Home from './Component/Pages/Home/Home';
import PrivateRoute from './Component/SignInSignOut/PrivateRoute/PrivateRoute';
import Inventory from './Component/Pages/Inventory/Inventory';
import Footer from './Component/Pages/Footer/Footer';


function App() {


  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>


        <Route path='/myitem' element={<PrivateRoute>
          <MyItem></MyItem>
        </PrivateRoute>}></Route>

        <Route path='/myitem' element={<Inventory></Inventory>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
