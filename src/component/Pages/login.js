import React from "react";
export default function dashboard() {
    return (
        <nav className="border-gray-200 bg-gray-300 dark:bg-gray-500 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommerce</span>
                </a>
                <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                        </li>
                        <button>

                        </button>
                        <li>
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};


// import React from 'react';

// export default function form({
//     setUser,
//     setAuthState
// }) {
//     return (
//         <div className="flex w-full h-auto flex flex-col items-center  ">
//             <div className="w-full flex items-center justify-center lg:w-1/2">
//                 <div className='mt-8 w-11/12 max-w-[600px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-500'>
//                     <h1 className='text-5xl font-semibold'>Sign In</h1>
//                     <p className='font-medium text-lg text-gray-500 mt-4'> Enter your email and password to Sign In.</p>
//                     <div className='mt-8'>
//                         <div className='flex flex-col'>
//                             <label className='text-lg font-medium text-left'>Email</label>
//                             <input
//                                 // value={email}
//                                 // onChange={(e) => setEmail(e.target.value)}
//                                 className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
//                                 placeholder="Enter your email" />
//                         </div>
//                         <div className='flex flex-col mt-4'>
//                             <label className='text-lg font-medium text-left'>Password</label>
//                             <input
//                                 // value={password}
//                                 // onChange={(e) => setPassword(e.target.value)}
//                                 className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
//                                 placeholder="Enter your email"
//                                 type={"password"}
//                             />
//                         </div>
//                         <div className='mt-8 flex justify-between items-center'>
//                             <div>
//                                 <input type="checkbox" id='remember' />
//                                 <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
//                             </div>
//                             <button className='font-medium text-base text-violet-500'>Forgot password</button>
//                         </div>
//                         <div className='mt-8 flex flex-col gap-y-4'>
//                             <button
//                                 className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Sign in</button>
//                             <button
//                                 className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4  rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 '>
//                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335" />
//                                     <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853" />
//                                     <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2" />
//                                     <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05" />
//                                 </svg>
//                                 Sign in with Google
//                             </button>
//                         </div>
//                         <div className='mt-8 flex justify-center items-center'>
//                             <p className='font-medium text-base text-gray-500'>Not registered?</p>
//                             <button
//                                 onClick={() => setAuthState('dashboard')}
//                                 className='ml-2 font-medium text-base text-violet-500'>Create account</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
//         <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin"/> 
//         <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
//       </div> */}
//         </div>
//     );
// };
