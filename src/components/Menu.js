import React, {useState} from 'react';
import menuIcon from '../assets/images/bars-solid.svg';

import {
 NavLink
} from "react-router-dom";


const Menu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        return setMenuOpen(!menuOpen);
    }

    return (
        <>
        <img src={menuIcon} alt="menu-icon" className="menu-icon" onClick={(e) => openMenu(e) }/>
            { menuOpen === true &&
                <div className={menuOpen ? 'nav-wrapper' : 'menu-close'}> 

                        <nav>
                            <ul>
                            <li onClick={(e) => openMenu(e)}>
                                <NavLink to="/">Home</NavLink>
                                
                            </li>
                            <li onClick={(e) => openMenu(e)}>
                                <NavLink to="/submit">Submit</NavLink>
                            </li>
                            </ul>
                        </nav>
                        

                </div>
            }
        </>
    )
}

export default Menu; 