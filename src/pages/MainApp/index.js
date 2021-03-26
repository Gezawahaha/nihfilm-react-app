import React from 'react';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import { Footer, Header } from '../../components';
import DetailFilm  from '../DetailFilm';
import Home from '../Home';
import Pricing from '../Pricing';


const MainApp = () => {
    return (
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route path="/pricing">
                        <Pricing />
                    </Route>
                    <Route path="/detailfilm">
                        <DetailFilm />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default MainApp;
