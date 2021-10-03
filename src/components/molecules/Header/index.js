import React from 'react';
import './header.scss';
import {Logo} from '../../../assets';

import {useHistory} from 'react-router-dom';
import { Button, Gap } from '../../atoms';

const Header = () => {
    const history = useHistory();
    //const location = useLocation();
    return (
        <div className="header">
            <div className="header-right">
                <img src={Logo} alt="logo" className="logo-app" onClick={() => history.push({pathname: '/mainapp', isLogin: true})}/>
                <Gap width={60}/>
                <Button tittle="Home" className="menu-header" onClick={() => history.push({pathname: '/mainapp', isLogin: true})}/>
                <Button tittle="Pricing" className="menu-header" onClick={() => history.push({pathname:'/pricing', isLogin: true})}/>
            </div>
                
            
            <Button className="button-login" tittle="Logout" onClick={() => history.push('/login')}/>
        </div>
    )
}

export default Header;
