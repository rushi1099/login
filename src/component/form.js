import React from "react";
import { useAuth } from '../authContext'; // Import the useAuth hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Login from './Pages/login'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Dashboard() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const { setAuthState } = useAuth();

    const navigate = useNavigate(); // Initialize navigate

    const handleLogin = () => {
        setAuthState('login'); // Update auth state if needed
        navigate('/login'); // Navigate to the login page
    };

    return (
        // <nav className="border-gray-200 bg-gray-300 dark:bg-gray-500 dark:border-gray-700">
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        //             <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        //             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ecommerce</span>
        //         </a>
        //         <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        //             <span className="sr-only">Open main menu</span>
        //             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        //             </svg>
        //         </button>
        //         <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        //             <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        //                 <li>
        //                     <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        //                 </li>
        //                 <li>
        //                 <li>
        //                 <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        //                 // onClick={() => setAuthState('login')}  
        //                 onClick={handleLogin}>Login</button>
        //                 </li>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        // <div className="bg-white">
        //     <header className="absolute inset-x-0 top-0 z-50">
        //         <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        //             <div className="flex lg:flex-1">
        //                 <a href="#" className="-m-1.5 p-1.5">
        //                     <span className="sr-only">Your Company</span>
        //                     <img
        //                         alt=""
        //                         src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
        //                         className="h-8 w-auto"
        //                     />
        //                 </a>
        //             </div>
        //             <div className="flex lg:hidden">
        //                 <button
        //                     type="button"
        //                     onClick={() => setMobileMenuOpen(true)}
        //                     className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        //                 >
        //                     <span className="sr-only">Open main menu</span>
        //                     <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        //                 </button>
        //             </div>
        //             <div className="hidden lg:flex lg:gap-x-12">
        //                 {navigation.map((item) => (
        //                     <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
        //                         {item.name}
        //                     </a>
        //                 ))}
        //             </div>
        //             <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        //                 <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        //                     Log in <span aria-hidden="true">&rarr;</span>
        //                 </a>
        //             </div>
        //         </nav>
        //         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        //             <div className="fixed inset-0 z-50" />
        //             <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        //                 <div className="flex items-center justify-between">
        //                     <a href="#" className="-m-1.5 p-1.5">
        //                         <span className="sr-only">Your Company</span>
        //                         <img
        //                             alt=""
        //                             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
        //                             className="h-8 w-auto"
        //                         />
        //                     </a>
        //                     <button
        //                         type="button"
        //                         onClick={() => setMobileMenuOpen(false)}
        //                         className="-m-2.5 rounded-md p-2.5 text-gray-700"
        //                     >
        //                         <span className="sr-only">Close menu</span>
        //                         <XMarkIcon aria-hidden="true" className="h-6 w-6" />
        //                     </button>
        //                 </div>
        //                 <div className="mt-6 flow-root">
        //                     <div className="-my-6 divide-y divide-gray-500/10">
        //                         <div className="space-y-2 py-6">
        //                             {navigation.map((item) => (
        //                                 <a
        //                                     key={item.name}
        //                                     href={item.href}
        //                                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        //                                 >
        //                                     {item.name}
        //                                 </a>
        //                             ))}
        //                         </div>
        //                         <div className="py-6">
        //                             <a
        //                                 href="#"
        //                                 className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        //                             >
        //                                 Log in
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </DialogPanel>
        //         </Dialog>
        //     </header>

        //     <div className="relative isolate px-6 pt-14 lg:px-8">
        //         <div
        //             aria-hidden="true"
        //             className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        //         >
        //             <div
        //                 style={{
        //                     clipPath:
        //                         'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        //                 }}
        //                 className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        //             />
        //         </div>
        //         <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        //             <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        //                 <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        //                     Announcing our next round of funding.{' '}
        //                     <a href="#" className="font-semibold text-indigo-600">
        //                         <span aria-hidden="true" className="absolute inset-0" />
        //                         Read more <span aria-hidden="true">&rarr;</span>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="text-center">
        //                 <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
        //                     Data to enrich your online business
        //                 </h1>
        //                 <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
        //                     Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
        //                     fugiat veniam occaecat.
        //                 </p>
        //                 <div className="mt-10 flex items-center justify-center gap-x-6">
        //                     <a
        //                         href="#"
        //                         className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        //                     >
        //                         Get started
        //                     </a>
        //                     <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        //                         Learn more <span aria-hidden="true">→</span>
        //                     </a>
        //                 </div>
        //             </div>
        //         </div>
        //         <div
        //             aria-hidden="true"
        //             className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        //         >
        //             <div
        //                 style={{
        //                     clipPath:
        //                         'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        //                 }}
        //                 className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        //             />
        //         </div>
        //     </div>
        // </div>

        <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8 flex">
            <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex-1">
                <div className="text-center">
                    <h1 className="text-6xl font-semibold tracking-tight text-gray-900 sm:text-7xl"> {/* Increased font size */}
                        Data to enrich your online business
                    </h1>
                    <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Card for the login form */}
            <div className="w-1/3">
            <Login></Login>

            </div>
            {/* <div className="w-1/3 p-6 bg-gray-100 rounded-lg shadow-md">  */}
            
                {/* <h2 className="text-2xl font-bold mb-4">Login</h2> */}
                {/* <Login></Login> */}
                {/* <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Log In
                        </button>
                    </div>
                </form> */}
            {/* </div> */}
        </div>
    </div>
    )
};