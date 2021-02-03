import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './Home'

const Routes = () => {
    return (
        <Router>
            <div>
                <nav>

                </nav>
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default Routes;