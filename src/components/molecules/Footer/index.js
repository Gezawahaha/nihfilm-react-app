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
                    <img src={IconLogo} alt="icon-nihfilm" className="logo" rel="noreferrer"/>
                </div>
                <div className="social-wrapper"> 
                    <a href="mailto: geza.mahardika@gmail.com" target="_blank" rel="noreferrer">
                        <Icon src={ICGoogle} alt="Icon Google" />
                    </a>
                    <a href="https://www.instagram.com/gezawahaha/" target="_blank" rel="noreferrer">
                        <Icon src={ICInstagram} alt="Icon Google"/>
                    </a>
                    <a href="https://github.com/Gezawahaha" target="_blank" rel="noreferrer">
                        <Icon src={ICGithub} alt="Icon Google"/>
                    </a>
                    <a href="https://wa.me/081283374330" target="_blank" rel="noreferrer">
                     <Icon src={ICWhatsapp} alt="Icon Google"/>
                    </a>
                    
                </div>
            </div>
            <div className="copy-right">
                <p>Copyright</p>
            </div>
        </div>
    );
};

export default Footer;