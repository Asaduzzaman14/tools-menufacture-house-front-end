import './App.css';
import Header from './Component/Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Component/SignInSignOut/Login/Login';
import Register from './Component/SignInSignOut/Register/Register';
import MyItem from './Component/Pages/MyItem/MyItem';
import Home from './Component/Pages/Home/Home';
import PrivateRoute from './Component/SignInSignOut/PrivateRoute/PrivateRoute';
import Footer from './Component/Pages/Footer/Footer';
import AddItem from './Component/Pages/AddItem/AddItem';
import About from './Component/Pages/About/About';
import Deliverd from './Component/Pages/Deliverd/Deliverd';
import ManageItem from './Component/Pages/ManageItem/ManageItem';
import NotFound from './Component/Pages/NotFound/NotFound';
import Blogs from './Component/Blogs/Blogs';

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>


        <Route path='/myitem' element={<PrivateRoute>
          <MyItem></MyItem>
        </PrivateRoute>}></Route>

        <Route path='/deliverd/:id' element={<PrivateRoute>
          <Deliverd></Deliverd>
        </PrivateRoute>}></Route>

        <Route path='/manageitem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
