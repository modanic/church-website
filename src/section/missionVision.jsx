import { useState } from "react";
import './index.css'

import modanmicLogo from "../assets/modanmicLog.jpg"

const MissionVision = () =>{
    return(
        <div className="mission-vision-container">
            <div className="mv-body">
                <div className="ms-con-body mission-body">
                    <div className="ms-container-main-body">
                        
                        <div className="mission-img-body">
                            <img src={modanmicLogo} alt="Mission Icon" />
                        </div>
                        <h3>
                            MISSION
                        </h3>
                        <p>
                            Developing and implementing strategies to nurture relationships with existing customers through email marketing, loyalty programs, and targeted communications.
                        </p>

                    </div>
                    
                </div>
                <div className="ms-con-body vision-body">
                    <div className="ms-container-main-body">
                        
                        <div className="mission-img-body">
                            <img src={modanmicLogo} alt="Mission Icon" />
                        </div>
                        <h3>
                            VISION
                        </h3>
                        <p>
                            Creating and managing lead generation strategies through targeted campaigns across various platforms (e.g., social media, email).
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionVision