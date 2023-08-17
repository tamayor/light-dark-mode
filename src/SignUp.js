import React from "react";
import moon from './modesIcon/crescent-moon.png';
import sun from './modesIcon/sun.png';
export const SignUp = (props) =>{
    const [darkMode, setDarkMode] = React.useState(false);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <div className={darkMode ? 'dark-mode' : 'wrapper' }>
            <img className='mode-icon' src={darkMode ? moon : sun} alt='mode icon' onClick={()=>setDarkMode(prevMode => !prevMode)}/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input className={darkMode ? 'dark-mode-input' : 'light-mode-input' } value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstname" id="firstname" name="firstname"/>
                <label htmlFor="lastname">Last Name</label>
                <input className={darkMode ? 'dark-mode-input' : 'light-mode-input' } value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastname" id="lastname" name="lastname"/>
                <label htmlFor="email">Email</label>
                <input className={darkMode ? 'dark-mode-input' : 'light-mode-input' } value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email"/>
                <label htmlFor="password">Email</label>
                <input className={darkMode ? 'dark-mode-input' : 'light-mode-input' } value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password"/>
                <button className={darkMode ? 'dark-mode-button' : 'light-mode-button' } type="submit">Log In</button>
            </form>
            <label>Do have an account? <span className="click-here" onClick={()=>props.onFormSwitch('login')}>Log in Here</span></label>
        </div>
    )
}