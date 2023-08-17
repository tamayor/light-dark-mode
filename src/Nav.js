import React from 'react';
import moon from './modesIcon/crescent-moon.png';
import sun from './modesIcon/sun.png';

export const Nav = () =>{
    const [darkMode, setDarkMode] = React.useState(false);
    return(
        <nav className='Nav'>
            <img className='mode-icon' src={darkMode ? moon : sun} alt='mode icon' onClick={()=>setDarkMode(prevMode => !prevMode)}/>
        </nav>
    )
}