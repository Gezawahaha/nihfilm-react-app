import React from 'react';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import { Footer, Header } from '../../components';
import DetailFilm  from '../DetailFilm';
import Home from '../Home';
import Pricing from '../Pricing';
import './mainapp.scss';

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <div >
                <Header/>
            </div>
            <div className="content-wrapper">
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
            </div>
            <div >
                <Footer />
            </div>
        </div>
    )
}

export default MainApp;
