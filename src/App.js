import logo from './logo.svg';
import './App.css';
import Form  from './component/form';
import Login from './component/Pages/login'
import Signup from './component/Pages/signup'
import React, { useState } from 'react';


function App() {

  const [authState, setAuthState] = useState('login'); // Initialize with 'home'

  return (
  //   <div className="flex w-full h-screen items-center justify-center bg-gray-100">
  //   {/* Centered form inside the flex container */}
  //   <Form />
  // </div>
   <div className="App">
   {authState === 'login' && <Form setAuthState={setAuthState} />}
   {authState === 'dashboard' && <Login setAuthState={setAuthState} />}
   {authState === 'signup' && <Signup setAuthState={setAuthState} />}
 </div>

  );
}

export default App;
