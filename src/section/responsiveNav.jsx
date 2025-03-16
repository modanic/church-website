import "./index.css"
import { NavLink } from "react-router";

const ResponsivNav = ({handleclcik}) =>{
    return(

        <div className="respNavCon">
            <nav className='mobileRespons mobileRes' onClick={handleclcik} >
                <div className='mobileBurggerContainer '>
                   <span className="mobileBugger"></span>
                   <span className="mobileBugger"></span> 
                   <span className="mobileBugger"></span> 

                </div>

            </nav>
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
        </div>
    )

}

export default ResponsivNav