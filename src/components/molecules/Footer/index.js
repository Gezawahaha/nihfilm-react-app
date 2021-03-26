import React from 'react';
import './footer.scss';
import {IconLogo} from '../../../assets';

// const Icon = ({}) => {
//     return (
//         <div></div>
//     );
// };

const Footer = () => {
    return (
        <div className="footer">
            <div className="wrapper">
                <div>
                    <img src={IconLogo} alt="icon-nihfilm"/>
                    
                </div>
                <div>
                    <p className="tittle">Copy Right</p>
                </div>
            </div>
            <div>
                <p className="tittle">Copy Right</p>
            </div>
        </div>
    );
};

export default Footer;