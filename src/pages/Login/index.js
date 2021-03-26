import React from 'react';
import { IconLogo, LoginBg, Logo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './login.scss';

const Login = () => {
    return (
        <div className="main-page">
            <div className="left">
                
                {/* <p className="text">Ini Baru Yang Namanya Film</p> */}
                <img src={Logo} className="logo" alt="description"/>
                <img src={LoginBg} className="bg-image" alt="description"/>
                
            </div>
            <div className="right">
                <Gap height={50}/>
                <img src={IconLogo} className="icon-logo" alt="Icon nihfilm"/>
                <p className="title">Login</p>
                <Gap height={10}/>
                <Input label="Username" placeholder="input a username" />
                <Gap height={18}/>
                <Input label="Passwords"  placeholder="input a password"/>
                <Gap height={50}/>
                <Button title="Login" />
                <Link title="Dont have an account?"/>
            </div>
        </div>
    );
};

export default Login;
