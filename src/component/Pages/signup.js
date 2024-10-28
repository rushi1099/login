import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function RegisterForm({ setAuthState }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onRegisterHandle = () => {
        console.log("Registering:", { name, email, password });

    };

    const navigate = useNavigate(); // Initialize navigate

    const handleSignupClick = () => {
        navigate('/dashboard');
    };

    return (
        // <div className="flex w-full h-screen flex flex-col items-center">
        //     <div className='mt-8 w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-400'>
        //         <h1 className='text-5xl font-semibold'>Register</h1>
        //         <p className='font-medium text-lg text-gray-500 mt-4'>Enter your email and password to register.</p>
        //         <div className='mt-8'>
        //             {/* Name Field */}
        //             <div className='flex flex-col'>
        //                 <label className='text-lg font-medium text-left'>Name</label>
        //                 <input
        //                     value={name}
        //                     onChange={(e) => setName(e.target.value)}
        //                     className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
        //                     placeholder="Enter your name"
        //                 />
        //             </div>

        //             {/* Email Field */}
        //             <div className='flex flex-col mt-4'>
        //                 <label className='text-lg font-medium text-left'>Email</label>
        //                 <input
        //                     value={email}
        //                     onChange={(e) => setEmail(e.target.value)}
        //                     className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
        //                     placeholder="Enter your email"
        //                     type="email"
        //                 />
        //             </div>

        //             {/* Password Field */}
        //             <div className='flex flex-col mt-4'>
        //                 <label className='text-lg font-medium text-left'>Password</label>
        //                 <input
        //                     value={password}
        //                     onChange={(e) => setPassword(e.target.value)}
        //                     className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
        //                     placeholder="Enter your password"
        //                     type="password"
        //                 />
        //             </div>

        //             {/* Register Button */}
        //             <div className='mt-8 flex flex-col gap-y-4'>
        //                 <button
        //                     onClick={onRegisterHandle}
        //                     className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">                            Register
        //                 </button>
        //             </div>

        //             {/* Already have an account */}
        //             <div className='mt-8 flex justify-center items-center'>
        //                 <p className='font-medium text-base text-gray-500'>Already have an account?</p>
        //                 <button className='ml-2 font-medium text-base text-violet-500'
        //                 //  onClick={() => setAuthState('login')}
        //                  onClick={handleSignupClick}>
        //                     Sign in
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div className="flex w-full h-screen items-center justify-center bg-gray-100">
        //     <div className="w-full max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
        //         <h1 className='text-3xl font-semibold text-center'>Register</h1>
        //         <p className='font-medium text-lg text-gray-600 mt-2 text-center'>Enter your details to register.</p>
        //         <div className='mt-6'>
        //             {/* Name Field */}
        //             <div className='flex flex-col'>
        //                 <label className='text-sm font-medium'>Name</label>
        //                 <input
        //                     value={name}
        //                     onChange={(e) => setName(e.target.value)}
        //                     className='w-full border rounded-md p-3 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
        //                     placeholder="Enter your name"
        //                 />
        //             </div>
        //             {/* Email Field */}
        //             <div className='flex flex-col mt-4'>
        //                 <label className='text-sm font-medium'>Email</label>
        //                 <input
        //                     value={email}
        //                     onChange={(e) => setEmail(e.target.value)}
        //                     className='w-full border rounded-md p-3 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
        //                     placeholder="Enter your email"
        //                     type="email"
        //                 />
        //             </div>
        //             {/* Password Field */}
        //             <div className='flex flex-col mt-4'>
        //                 <label className='text-sm font-medium'>Password</label>
        //                 <input
        //                     value={password}
        //                     onChange={(e) => setPassword(e.target.value)}
        //                     className='w-full border rounded-md p-3 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
        //                     placeholder="Enter your password"
        //                     type="password"
        //                 />
        //             </div>
        //             {/* Register Button */}
        //             <div className='mt-8 flex flex-col gap-4'>
        //                 <button
        //                     onClick={onRegisterHandle}
        //                     className='py-3 bg-blue-500 rounded-md text-white font-bold transition duration-200 hover:bg-blue-600'
        //                 >
        //                     Register
        //                 </button>
        //             </div>
        //             {/* Already have an account */}
        //             <div className='mt-6 text-center'>
        //                 <p className='text-sm text-gray-500'>Already have an account?</p>
        //                 <button
        //                     // onClick={handleLoginClick}
        //                     className='text-sm text-blue-500 font-semibold'
        //                 >  Sign in
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="flex w-full min-h-screen items-center justify-center bg-gray-100">
{/* <div className="w-11/12 max-w-lg p-12 bg-white shadow-lg rounded-lg border border-gray-300"> */}
<div className='w-10/12 max-w-[700px] px-16 py-20 rounded-3xl bg-white border-2 border-gray-400'>

<h1 className="text-4xl font-semibold text-center">Register</h1>
                <p className="text-lg text-gray-600 mt-4 text-center">
                    Enter your email and password to register.
                </p>
                <div className="mt-6">
                    {/* Name Field */}
                    <div className="flex flex-col mt-4">
                        <label className="text-lg font-medium">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded-md p-3 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    {/* Email Field */}
                    <div className="flex flex-col mt-4">
                        <label className="text-lg font-medium">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded-md p-3 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>
                    {/* Password Field */}
                    <div className="flex flex-col mt-4">
                        <label className="text-lg font-medium">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded-md p-3 mt-1 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            type="password"
                        />
                    </div>
                    {/* Register Button */}
                    <div className="mt-8 flex flex-col gap-4">
                        <button
                            onClick={onRegisterHandle}
                            className="py-3 bg-blue-500 rounded-md text-white font-bold transition duration-200 hover:bg-blue-600"
                        >
                            Register
                        </button>
                    </div>
                    {/* Already have an account */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-500">Already have an account?</p>
                        <button
                            onClick={handleSignupClick}
                            className="text-sm text-blue-500 font-semibold"
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

