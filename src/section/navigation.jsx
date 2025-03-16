
import './index.css'

import modanmicLogo from "../assets/modanmicLog.jpg"

import { NavLink } from "react-router";

const Navigation = ({handleclcik}) =>{

    return(
        <div className='nav-container'>
            
            <div className='nav-logo-contain'>
                <img src={modanmicLogo} alt="modanmic logo" />
                <h3>CHURCH OF THE LAST HOPPE</h3>
            </div>
            <nav className='deskRespons'>
                <ul>
                    <li>
                        <NavLink to='/' end>
                            Home
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/downloads">
                            Downloads
                        </NavLink> 
                    </li>
                    
                    <li>
                        <NavLink to="/media">
                            Media
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/testemones">
                            Testemones
                        </NavLink> 
                    </li>
                    <li>
                        <NavLink to="/gaveOnline" >
                            Give Online
                        </NavLink> 
                    </li>
                    
                </ul>
            </nav>
            <nav className='mobileRespons' onClick={handleclcik}>
                <div className='mobileBurggerContainer'>
                   <span className="mobileBugger"></span>
                   <span className="mobileBugger"></span> 
                   <span className="mobileBugger"></span> 

                </div>

            </nav>
        </div>
    )

}

export default Navigation
