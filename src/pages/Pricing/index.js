import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { IconLogo } from '../../assets';
import { Button } from '../../components';
import './pricing.scss'

const Pricing = () => {

    const [isLogin] = useState(false);
    const history = useHistory();

    function btn(isLogin) {
        if(isLogin !== true){
                return <Button className="pricing-button" tittle="select" onClick={() => alert('sorry this fungction not finish! :(')}/>;
            }else{
                return <Button className="pricing-button" tittle="login" onClick={() => history.push ('/login')} />;
            }
    };

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <div className="title-pricing">
                <p >Plans and Pricing</p>
            </div>
            <div className="pricing-desc">
                <p>Nihfilm by StreamFlix-Geza offers a variety of plans to meet your needs. The plan you choose will determine the rating of film that you can watch Nihfilm on at the website.
                    <br/>
                    <br/>
                    With all of our plans, you can download the Nihfilm app on all your favorite devices and watch unlimited movies and TV shows SOON.</p>
            </div>
            {/* batas*/}
            <div className="background">
                <div className="container">
                    <div className="panel pricing-table">
                        <div className="pricing-plan">
                            <img src={IconLogo} alt="" className="pricing-img"/>
                            <h2 className="pricing-header">1 - 3</h2>
                            <p className="pricing-features">Rating</p>
                            <span className="pricing-price">Rp 3500</span>
                            { btn(isLogin) }
                        </div>
                        <div className="pricing-plan">
                            <img src={IconLogo} alt="" className="pricing-img"/>
                            <h2 className="pricing-header">3 - 6</h2>
                            <p className="pricing-features">Rating</p>
                            <span className="pricing-price">Rp 8250</span>
                            { btn(isLogin) }
                        </div>
                        <div className="pricing-plan">
                            <img src={IconLogo} alt="" className="pricing-img"/>
                            <h2 className="pricing-header">6 - 8</h2>
                            <p className="pricing-features">Rating</p>
                            <span className="pricing-price">Rp 16350</span>
                            { btn(isLogin) }
                        </div>
                        <div className="pricing-plan">
                            <img src={IconLogo} alt="" className="pricing-img"/>
                            <h2 className="pricing-header">8 - 10</h2>
                            <p className="pricing-features">Rating</p>
                            <span className="pricing-price">Rp 21250</span>
                            { btn(isLogin) }
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            {/* batas*/}
        </div>
    )
}

export default Pricing;
