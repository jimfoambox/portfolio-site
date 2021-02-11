import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import Home from './Home'
import Portfolio from './Portfolio'
import Bio from './Bio'
import Contact from './Contact'

const Routes = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Navbar bg='light' expand='lg'>
                        <Nav className='ml-auto'>
                            <NavItem eventkey={1} href="/">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={2} href="/">
                                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={3} href="/">
                                <Nav.Link as={Link} to="/bio">About Me</Nav.Link>
                            </NavItem>
                            <NavItem eventkey={4} href="/">
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </nav>
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/portfolio" exact component={Portfolio} />
                        <Route path="/bio" exact component={Bio} />
                        <Route path="/contact" exact component={Contact} />
                    </Switch>
                </main>
                <footer>
                    <div>© Copyright 2021 James Gill. All Rights Reserved.</div>
                </footer>
            </div>
        </Router>
    )
}

export default Routes;