import React from "react";
import './MainPage.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const MainPage=()=>{
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>new</p>
                        <img src={hand_icon} alt="" className="image"/>
                    </div>
                    <p>collections</p>
                    <p>for every one</p>
                </div>
                <div className="hero-latest-button">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt=""/>
            </div>

        </div>
    )
}

export default MainPage