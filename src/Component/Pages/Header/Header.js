import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import logo from '../../../image/logo.jpg'
import './Header.css'


const Header = () => {

    const [user] = useAuthState(auth);
    const location = useLocation();
    const path = location.pathname;


    return (
        <>
            {/* <Navbar className='navbar' expand="lg" sticky='top' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"> <img height={30} src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto'>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>

                            {
                                user ? <>
                                    <Nav.Link as={Link} to="/manageitem">Manage item</Nav.Link>
                                    <Nav.Link as={Link} to="/additem">Add item</Nav.Link>
                                    <button className='sign-out-btn' onClick={() => signOut(auth)}  >Log Out</button>
                                </>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}


            <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" className=" borderBottom">
                <Container>
                    <Navbar.Brand href="#home" as={Link} to="/" >
                        <Nav.Link as={Link} href="#home" to="/" className="d-flex justify-content-center  align-items-center widthResponsive">
                            <img height={40} src={logo} alt="" />
                        </Nav.Link >
                    </Navbar.Brand>

                    <Navbar.Toggle className='me-4' aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto d-flex justify-content-center  align-items-start align-items-xl-center py-auto ps-2 " >

                            <Nav.Link as={Link} to="/" className={`text-uppercase  mx-2 `} style={{ color: `${path === '/' ? '#A03A82' : "white"}`, fontWeight: `${path === '/' ? 'bolder' : ""}` }} href="#home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/about" className={`text-uppercase  mx-2 `} style={{ color: `${path === '/about' ? '#A03A82' : "white"}`, fontWeight: `${path === '/about' ? 'bolder' : ""}` }} href="#about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/blogs" className={`text-uppercase  mx-2 `} style={{ color: `${path === '/blogs' ? '#A03A82' : "white"}`, fontWeight: `${path === '/blogs' ? 'bolder' : ""}` }} href="#blogs">Blogs</Nav.Link>

                            {
                                user ? <>
                                    <Nav.Link as={Link} to="/manageitem" className={`text-uppercase  mx-2 `} style={{ color: `${path === '/manageitem' ? '#A03A82' : "white"}`, fontWeight: `${path === '/manageitem' ? 'bolder' : ""}` }} href="#manageitem">Manage item</Nav.Link>
                                    <Nav.Link as={Link} to="/additem" className={`text-uppercase  mx-2 `} style={{ color: `${path === '/additem' ? '#A03A82' : "white"}`, fontWeight: `${path === '/additem' ? 'bolder' : ""}` }} href="#additem">ADD ITEM</Nav.Link>
                                    <Nav.Link as={Link} to="/myitem" className={`text-uppercase  mx-2 `} style={{ color: `${path === '/myitem' ? '#A03A82' : "white"}`, fontWeight: `${path === '/myitem' ? 'bolder' : ""}` }} href="#myitem">MY ITEM</Nav.Link>

                                    <button className='sign-out-btn' onClick={() => signOut(auth)}  >Log Out</button>

                                </>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        <button className='sign-out-btn'>LOGIN</button>
                                    </Nav.Link>

                            }



                            {/* <Nav.Link className="ms-md-2">

                                {
                                    <button>Login</button>
                                }
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;