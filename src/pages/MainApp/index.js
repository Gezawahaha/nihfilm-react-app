import React from 'react';
import { BrowserRouter as  Router, Switch, Route   } from 'react-router-dom';
import { Footer, Header } from '../../components';
import DetailFilm  from '../DetailFilm';
import Home from '../Home';
import Pricing from '../Pricing';
import './mainapp.scss';

import { Scrollbars } from 'react-custom-scrollbars';

const MainApp = () => {
    return (
        <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
            <div className="bg-main-app">
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
                                    <Route path="/" >
                                        <Home />
                                    </Route>
                                </Switch>
                            </Router>
                        
                    </div>
                    <div >
                        <Footer />
                    </div>
                </div>
            </div>
        </Scrollbars>
    )
}

export default MainApp;
