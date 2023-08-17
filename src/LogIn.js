import React from "react"
import moon from './modesIcon/crescent-moon.png';
import sun from './modesIcon/sun.png';

export const LogIn = (props) =>{
    const [darkMode, setDarkMode] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <div className={darkMode ? 'dark-mode' : 'wrapper' }>
            <img className='mode-icon' src={darkMode ? moon : sun} alt='mode icon' onClick={()=>setDarkMode(prevMode => !prevMode)}/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className={darkMode ? 'dark-mode-input' : 'light-mode-input' } value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your_email@email.com" id="email" name="email"/>
                <label htmlFor="password">Email</label>
                <input className={darkMode ? 'dark-mode-button' : 'light-mode-button' } value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="your_assword" id="password" name="password"/>
                <button className={darkMode ? 'dark-mode-button' : 'light-mode-button' } type="submit">Log In</button>
            </form>
            <label>Don't have an account? <span className="click-here" onClick={()=> props.onFormSwitch('signup')}>Register Here</span></label>
        </div>
    )
}