import React from 'react';
import './button.scss';


const Button = ({tittle,logo, ...rest}) => {
    // var btnShow;
    // if(logo != null){
    //     btnShow = <div><p>ada logo</p></div>;
    // }else {
    //     btnShow = <button className="button" {...rest}>{tittle}</button>;
    // }
    return (
        <div>
            {/* <img src={logo} alt="icon"/>*/}
            <button className="button" {...rest}>{tittle}</button> 
        </div>
    );
}

export default Button;
