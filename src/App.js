import logo from './logo.svg';
import './App.css';
import Form from './component/form';
import Login from './component/Pages/login'
import Signup from './component/Pages/signup'
import Main from './component/Pages/main'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './authContext'; // Import the AuthProvider



function App() {

  // const [authState, setAuthState] = useState('dashboard'); // Initialize with 'home'

  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Form />} />
          <Route path="/dashboard" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </AuthProvider>

    //     <Router>
    //     <div>
    //         <Form />
    //         <Routes>
    //             {/* Define your routes here */}
    //             {/* <Route path="/" element={<Navigate to="/home" />} /> */}
    //             <Route path="/dashboard" element={<Form />} />
    //             <Route path="/login" element={<Login />} />
    //             {/* <Route path="/services" element={<Services />} />
    //             <Route path="/pricing" element={<Pricing />} />
    //             <Route path="/contact" element={<Contact />} /> */}
    //             {/* You can add more routes as needed */}
    //         </Routes>
    //     </div>
    // </Router>

    // <div className="App">

    //   { authState === 'dashboard' && <Form setAuthState={setAuthState} />}
    //   { authState === 'login' && <Login setAuthState={setAuthState}  />}
    //   { authState === 'signup' && <Signup setAuthState={setAuthState} />}

    // </div>

  );
}

export default App;
