import { useState } from "react";
import "./index.css"

import Navigation from "../section/navigation";
import ResponsivNav from "../section/responsiveNav";

import AboutSection from "../section/aboutSection";
import MissionVision from "../section/missionVision";
import Subscribe from "../section/subscribe";


const About = () =>{

    const [displayNav, setDisplayNav] = useState(false)
    const [displayBackground, setDisplayBackground] = useState(false)

    const displayMobileNav = ()=>{
        console.log("background")
        console.log("displayNav", !displayNav)
        console.log("displayBackground", !displayBackground)

        setDisplayNav(!displayNav)
        setDisplayBackground(!displayBackground)
    }

    return(
        <div className='rootContainer'>
            <div className="rootBody">
                <Navigation handleclcik={displayMobileNav} />

                <AboutSection />
                <MissionVision />
                <Subscribe />

            </div>
            {
                displayBackground 
                && 
                <div className="backgroundCover">
                {displayNav && <ResponsivNav handleclcik={displayMobileNav} />}
                </div>
            }
        </div>
    )
}

export default About
