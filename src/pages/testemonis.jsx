import { useState } from "react";
import "./index.css"

// SECTIONS
import Navigation from "../section/navigation";
import ResponsivNav from "../section/responsiveNav";

// COMPONENTES
import ContactForm from "../components/ContactForm.jsx";

const Testemones = () =>{

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
                
                {/* {
                    !displayNav 
                    &&  */}
                    <ContactForm />
                {/* } */}
                
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

export default Testemones
