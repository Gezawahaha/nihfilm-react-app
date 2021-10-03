import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Footer, Header } from '../../components';
import { Login, MainApp, Pricing } from '../../pages';

const Routes = () => {
    return (
        <Router>
            <Switch>
                
                <Route path="/pricing">
                    <div className="main-app-wrapper">
                        <Header />
                            <div className="content-wrapper">
                                <Pricing />
                            </div>
                        <Footer />   
                    </div>
                </Route>
                
                <Route path="/mainapp">
                    <MainApp />
                </Route>

                <Route path="/">
                    <Login />
                </Route>
                
            </Switch>
        </Router>
    )
}

export default Routes;
