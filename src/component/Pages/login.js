import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form({
    setUser,
    setAuthState
}) {
    const navigate = useNavigate(); // Initialize navigate

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignupClick = () => {
        navigate('/signup');
    };
    const handleLogin = () => {
        // if (email === 'admin' && password === '1234') {
        //     // Set user state or auth state if needed
        //     setUser(email); // Set the user to 'admin'
        //     setAuthState(true); // Assuming you want to mark the user as authenticated
        //     navigate('/main'); // Navigate to the main page
        // } else {
        //     alert('Invalid credentials. Please try again.');
        // }
         navigate('/main');
    }
    return (
        <div className="flex w-full h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
                <h1 className='text-3xl font-semibold text-center'>Sign In</h1>
                <p className='font-medium text-lg text-gray-600 mt-2 text-center'>Enter your email and password to sign in.</p>
                <div className='mt-6'>
                    <div className='flex flex-col'>
                        <label className='text-sm font-medium'>Email</label>
                        <input
                            className='w-full border rounded-md p-3 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label className='text-sm font-medium'>Password</label>
                        <input
                            className='w-full border rounded-md p-3 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            placeholder="Enter your password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-between items-center mt-6'>
                        <div>
                            <input type="checkbox" id='remember' />
                            <label className='ml-2 text-sm'>Remember for 30 days</label>
                        </div>
                        <button className='text-sm text-blue-500'>Forgot password?</button>
                    </div>
                    <div className='mt-8 flex flex-col gap-4'>
                        <button
                            className='py-3 bg-blue-500 rounded-md text-white font-bold transition duration-200 hover:bg-blue-600'
                            onClick={handleLogin}
                        >
                            Sign in
                        </button>
                        <button
                            className='flex items-center justify-center gap-2 py-3 border-2 border-gray-300 rounded-md font-semibold text-gray-700 hover:bg-gray-200 transition duration-200'
                        >
                            Sign in with Google
                        </button>
                    </div>
                    <div className='mt-6 text-center'>
                        <p className='text-sm text-gray-500'>Not registered?</p>
                        <button
                            onClick={handleSignupClick}
                            className='text-sm text-blue-500 font-semibold'
                        >
                            Create account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
