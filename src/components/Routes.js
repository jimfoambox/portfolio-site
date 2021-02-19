import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link, animateScroll as scroll } from "react-scroll"
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import Home from './Home'
import Slideshow from './Slideshow';

const Routes = () => {
    return (
        <Router>
            <div>
                <Slideshow />
                    <Navbar bg='dark' expand='lg' sticky="top">
                        <Nav>
                            <div><img src='/assets/jamesgilllogo.png' style={{ height: 40 }} /></div>
                        </Nav>
                        <Nav className='ml-auto'>
                            <NavItem eventkey={1} href="/">
                                <Nav.Link as={Link} className="navLink" spy={true} smooth={true} offset={-500} duration={500} to="home">Home</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={2} href="/">
                                <Nav.Link as={Link} className="navLink" spy={true} smooth={true} offset={-70} duration={500} to="portfolio">Portfolio</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={3} href="/">
                                <Nav.Link as={Link} className="navLink" spy={true} smooth={true} offset={-70} duration={500} to="aboutme">About Me</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={4} href="/">
                                <Nav.Link as={Link} className="navLink" spy={true} smooth={true} offset={50} duration={500} to="contact">Contact</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                <main>
                    <Switch>
                        <Route path="/" component={Home} />
                    </Switch>
                </main>
                <footer style={{ backgroundColor: '#343a40' }}>
                    <div style={{ textAlign: 'center', color:"#FFF" }}>
                        © Copyright 2021 James Gill. 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        Built with 
                        <a href={"https://reactjs.org/"}>
                        <img style={{width: 40, marginLeft:10, marginRight: 10}} src='/assets/reactLogo500px.png' />
                        </a>
                        <a href={"https://react-bootstrap.github.io/"}>
                        <img style={{width: 40, marginRight: 10}} src='/assets/bootstrap500px.png' />
                        </a>
                        <a href={"https://www.react-spring.io/"}>
                        <img style={{width: 40, marginRight: 10}} src='/assets/reactSpring500px.png' />
                        </a>
                    </div>
                </footer>
            </div>
        </Router>
    )
}

export default Routes;