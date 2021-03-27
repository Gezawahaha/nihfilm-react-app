import React from 'react';
import './footer.scss';
import {ICGithub, ICGoogle, ICInstagram, IconLogo, ICWhatsapp} from '../../../assets';

const Icon = ({src , alt}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={src} alt={alt}/>
        </div>
    );
};

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img src={IconLogo} alt="icon-nihfilm" className="logo"/>
                </div>
                <div className="social-wrapper"> 
                    <Icon src={ICGoogle} alt="Icon Google"/>
                    <Icon src={ICInstagram} alt="Icon Google"/>
                    <Icon src={ICGithub} alt="Icon Google"/>
                    <Icon src={ICWhatsapp} alt="Icon Google"/>
                </div>
            </div>
            <div className="copy-right">
                <p>Copyright</p>
            </div>
        </div>
    );
};

export default Footer;