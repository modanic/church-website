import { useState } from "react";
import "./index.css"
import modanmicLgog from "../assets/modanmicLog.jpg"

const AboutSection = () =>{
    return(
        <div className="about-sec-container">
            <div className="about-sec-body">
                <div className="about-sec-mob about-sec-body-img">
                    <img src={modanmicLgog} alt="Company logo" />
                </div>
                <div className="about-sec-mob about-sec-body-info">
                    <h2>
                        About
                    </h2>
                    <p>
                        MODANMIC Prints, Publish, Brands, General consultant
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default AboutSection