import React, { useEffect, useState } from 'react';
import { IconLogo, LoginBg, Logo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import './login.scss';
import {useHistory} from 'react-router-dom';



const Login = () => {
    const history = useHistory();

   const [state, setState] = useState({
       username: "",
       password: ""
   });

   

   const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.username === "geza" && state.password === "123") {
        history.push({
            pathname:'/mainapp', 
            state:{isLogin: true } 
            })
    }else{
        alert('password & username did not match')
    }
    //console.log(state.username ,state.password);
    };

    
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    useEffect(() => {
        //console.log( state.password, '&');
    }, [])

    return (
        <div className="main-page">
            <div className="left">
                
                <p className="text">Original by StreamFlix-Geza .</p>
                <img src={Logo} className="logo" alt="description"/>
                <img src={LoginBg} className="bg-image" alt="description"/>
                
            </div>
            <div className="right">
                {/* <button className="ic-back-wrapped" onClick={() => history.push('/')}>
                    <img src={ICBack} className="icon-back" alt="icon back"/>
                    <p className="tittle-back">Home</p>
                </button> */}
                
                <Gap height={50}/>
                <img src={IconLogo} className="icon-logo" alt="Icon nihfilm"/>
                <p className="tittle">Login</p>
                <Gap height={10}/>
                <Input label="Username" placeholder="input a username" id="username" onChange={handleChange} />
                <Gap height={18}/>
                <Input label="Passwords" type="password"  placeholder="input a password"  id="password" onChange={handleChange}/>
                <Gap height={50}/>
                <Button tittle="Login" onClick={ handleSubmitClick }/>
                <Link tittle="Dont have an account?" onClick={() => alert('username: geza & password: 123')}/>
            </div>
        </div>
    );
};

export default Login;
