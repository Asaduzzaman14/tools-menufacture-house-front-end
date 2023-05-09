import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Home/Navbar';
import About from './Components/Home/About';
import Review from './Components/Home/Review';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import RequirAuth from './Components/Login/RequirAuth';
import Purchase from './Components/Routes/Purchase';
import NotFound from './Components/Shared/NotFound';
import Dashborad from './Components/Dashboard/Dashborad';
import Blogs from './Components/Home/Blogs';
import Users from './Components/Dashboard/Users';
import MyOrder from './Components/Dashboard/MyOrder';
import AddReview from './Components/Dashboard/AddReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProducts from './Components/Dashboard/AddProducts';
import MyPortfolio from './Components/Dashboard/MyPortfolio';
import ManageOrders from './Components/Dashboard/ManageOrders';
import ManageTools from './Components/Dashboard/ManageTools';
import MyProfile from './Components/Dashboard/MyProfile';
import MyProfileInfo from './Components/Dashboard/MyProfileInfo';
import Payment from './Components/Dashboard/Payment';
import Aos from 'aos';
import Header from './Components/Shared/Header';

Aos.init();



function App() {
  return (
    <div className="App bg-primary">
      {/* <Navbar ></Navbar> */}
      <Header />

      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/home" element={<Home></Home>}> </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}> </Route>
        <Route path="/myProfileInfo" element={<MyProfileInfo></MyProfileInfo>}> </Route>


        <Route path="/purchase/:id" element={<RequirAuth><Purchase></Purchase></RequirAuth>}> </Route>
        <Route path="/about" element={<> <About></About></>}> </Route>


        <Route path="dashborad" element={<RequirAuth><Dashborad></Dashborad></RequirAuth>}>

          <Route index element={<MyPortfolio></MyPortfolio>}> </Route>
          <Route path="addreview" element={<AddReview></AddReview>}> </Route>
          <Route path="orders" element={<MyOrder></MyOrder>}> </Route>
          <Route path="users" element={<Users></Users>}> </Route>
          <Route path="orders/payment/:id" element={<Payment></Payment>}> </Route>


          <Route path="addproducts" element={<AddProducts></AddProducts>}> </Route>
          <Route path="allorders" element={<ManageOrders></ManageOrders>}> </Route>
          <Route path="manageTools" element={<ManageTools></ManageTools>}> </Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}> </Route>


        </Route>



        <Route path="/login" element={<Login></Login>}> </Route>
        <Route path="/signup" element={<Signup></Signup>}> </Route>
        <Route path="*" element={<NotFound></NotFound>}> </Route>


      </Routes>
      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
