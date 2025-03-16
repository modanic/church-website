import { useState } from "react";
import "./index.css";

// import Footer from "../components/footer"
import Navigation from "../section/navigation";
import ResponsivNav from "../section/responsiveNav";

const GiveOnline = () =>{

    const [displayNav, setDisplayNav] = useState(false)
    const [displayBackground, setDisplayBackground] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(true)

    const displayMobileNav = ()=>{
        console.log("background")
        console.log("displayNav", !displayNav)
        console.log("displayBackground", !displayBackground)

        setDisplayNav(!displayNav)
        setDisplayBackground(!displayBackground)
    }

    const handelClickToggleMenu = () =>{
        setToggleMenu(!toggleMenu)
    }

    return(
        <div className='rootContainer'>
            <div className="rootBody">
                <Navigation handleclcik={displayMobileNav} />

                <div className="gaveOnline-body">
                    {
                        toggleMenu
                        &&
                        <div className="giveOnline-container-menu">
                            <div className="giveOnline-con-menu-info "></div>
                            <div className="giveOnline-con-menu-arrow">
                                <div onClick={handelClickToggleMenu} className="giveaway-arrow">

                                </div>
                            </div>
                        </div>
                    }
                    {
                        !toggleMenu
                        &&
                        <div className="giveOnline-container-menu-short">
                            <div className="giveOnline-con-menu-info "></div>
                            <div className="giveOnline-con-menu-arrow">
                                <div onClick={handelClickToggleMenu} className="giveaway-arrow">

                                </div>
                            </div>
                        </div>
                    }
                    <div className="giveOnline-container-page">

                    </div>
                </div>

                {/* <Footer /> */}
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

export default GiveOnline
