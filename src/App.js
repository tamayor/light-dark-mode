import React from 'react';


import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import './App.css';


function App() {
  const [form, setForm] = React.useState('login');
  function toggleChangeForm(formState){
    setForm(formState);
    console.log(formState)
  }
  return (
    <div>
      {
        form === 'login' ? <LogIn onFormSwitch={toggleChangeForm} /> : <SignUp onFormSwitch={toggleChangeForm}/>
      }
    </div>
  );
}

export default App;
