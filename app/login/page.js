'use client';
import Image from "next/image";
import Logo from '@/public/logo.png'
import loginImg from '@/public/login.svg'
import fbIcon from '@/public/facebook.svg'
import ggIcon from '@/public/goggle.svg'
import liIcon from '@/public/linkedin.svg'
import Link from "next/link";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Login() {

    return (
        <div className="w-full bg-[#fff]">
            <div className="w-full flex justify-between h-full md:h-screen bg-[#fefafa]">
                <div className="hidden md:block w-6/12 h-full bg-[#0085FF] px-12">
                    <div className="h-full relative flex justify-end items-end">
                        <div className="mt-6 h-24 w-52 absolute top-0 left-0">
                            <Image src={Logo} className="" alt="Proliferate Logo" />
                        </div>
                        <Image src={loginImg} className="w-full" alt="Proliferate Logo" />
                    </div>
                </div>
                <div className="bg-[#fff] flex flex-col w-full justify-center items-center md:w-6/12 gap-8">
                    <div className="w-full">
                        <div className="py-4 w-11/12 mx-auto md:w-full md:hidden">
                            <div className="h-full w-52">
                                <Image src={Logo} className="" alt="Proliferate Logo" />
                            </div> 
                        </div>
                        
                        <div className="md:hidden mb-4 bg-[#186BAD] w-full p-5 flex justify-center items-center">
                            <h1 className="font-bold text-sm text-white">LOGIN YOUR ACCOUNT</h1>
                        </div>
                    </div>
                    
                    <form className="w-11/12 md:w-7/12">
                        <div className="mb-10 hidden md:block">
                            <h1 className="font-bold text-2xl text-center">LOGIN YOUR ACCOUNT</h1>
                        </div>
                        <div className="flex flex-col gap-1 mb-8">
                            <label className="font-bold">Username:</label>
                            <input type="email" className="rounded-md border border-[#ddd] bg-white py-2 ps-3" placeholder="Enter your email address" />
                        </div>
                        <div className="flex flex-col gap-1 mb-12">
                            <label className="font-bold">Password:</label>
                            <input type="password" className="rounded-md border border-[#ddd] bg-white py-2 ps-3" placeholder="Enter your password" />
                        </div>
                        <div className="w-full flex flex-col justify-center items-center">
                            <div className="w-full flex justify-center gap-3">
                                <Link href={'/login'} className="py-2 px-4 text-white bg-[#186BAD] rounded-full">Login</Link>

                                <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="bg-[#DE4B18] text-white inline-flex w-full justify-center gap-x-1.5 rounded-md px-4 py-2">
                                        Register
                                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#DE4B18] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-white">
                                        <div className="py-1">
                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                href="/register"
                                                className={classNames(
                                                    active ? 'bg-[#f4683a] text-white/80 duration-500' : 'text-white',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                >
                                                As a Student
                                                </Link>
                                            )}
                                            </Menu.Item>
                                            <Menu.Item>
                                            {({ active }) => (
                                                <Link
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-[#f4683a] text-white/80 duration-500' : 'text-white',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                >
                                                As a Tutor
                                                </Link>
                                            )}
                                            </Menu.Item>
                                        </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                            <Link href={'#'} className="hidden md:inline mt-2 underline">Forgot your password?</Link>
                            <Link href={'#'} className="md:hidden mt-2">Forgot your password?</Link>
                        </div>
                    </form>
                    <div className="w-7/12 flex flex-col items-center justify-center mt-4 mb-12">
                        <h2 className="font-bold">Sign in with</h2>
                        <div className="flex justify-between items-center gap-12 mt-3">
                            <button className="h-8 w-8">
                                <Image src={fbIcon} alt="" className="h-full w-full" />
                            </button>
                            <button className="h-8 w-8">
                                <Image src={ggIcon} alt="" className="h-full w-full" />
                            </button>
                            <button className="h-8 w-8">
                                <Image src={liIcon} alt="" className="h-full w-full" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}