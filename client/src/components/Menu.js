
import { NavLink } from "react-router-dom";
 import './Menu.css'



function Menu() {

     

    return (
        <div id='container'>

            <NavLink to="/logout" className='inactive'>Log Out</NavLink>
            <NavLink to="/allthings" id='noShow' >All Workouts</NavLink>
            <NavLink to="/addthings" className='inactive' >Add Workout</NavLink>
            <NavLink to="/mythings" className='inactive' >Personal Workouts</NavLink>
            <NavLink to="/addmything" id='noShow' >Add Personal Workout</NavLink>
            
            <NavLink to="/allmail" className='inactive' >Mail</NavLink>

                       
                



        </div>
    )
}

export default Menu