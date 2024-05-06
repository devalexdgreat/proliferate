'use client'
import Image from "next/image";
import Logo from '@/public/logo.png'
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { useEffect } from "react";

export default function CfmPage({ handleNext, goTo }) {
    
    // setTimeout(() => {
    //     runFunc();
    // }, 2000);

    useEffect(()=> {
        const timer = setTimeout(() => {
            handleNext();
        }, 1000);
        return () => clearTimeout(timer);
    }, [handleNext]);

    return (
        <div className="w-full md:w-11/12 mx-auto md:h-screen">
            <div className="w-11/12 mx-auto md:w-full py-4 md:py-0 mt-2">
                <div className="h-full w-52">
                    <Image src={Logo} className="" alt="Proliferate Logo" />
                </div>
            </div>
            <div className="mb-4 bg-[#186BAD] p-4 text-white text-sm md:hidden">
                <h1 className="font-bold text-center">Check Your Email to Confirm Your Account</h1>
            </div>
            <div className="w-11/12 md:w-11/12 mx-auto">
                <div className="mb-4 hidden md:block">
                    <h1 className="font-bold text-center">Check Your Email to Confirm Your Account</h1>
                </div>
                <div className="w-full md:border md:shadow-lg rounded-md pb-56">
                    <div className="w-full md:w-8/12 text-sm mx-auto text-center mt-6">
                        <h1 className="font-bold">Instruction:</h1>
                        <p>
                            An email as been sent to your email address
                            <br/>Please check your inbox and follow the instructions to confirm your account.
                        </p>
                    </div>
                    <div className="w-full md:w-11/12 mx-auto flex justify-center gap-4 mt-10 mb-16">
                        <button className="bg-transparent text-[#0085FF] border-[#0085FF] border-2 py-2 px-4 rounded-md text-sm">Resend Confirmation Email</button>
                        <Link href={'/login'} className="bg-[#186BAD] text-white py-2 px-4 rounded-md text-sm">Back to Login</Link>
                    </div>
                </div>
                {/* <div className="w-full md:border md:shadow-lg rounded-md mt-6 mb-5 md:mb-0 p-3 flex justify-between">
                    <button className="hidden md:block border-2 border-[#0162E8] bg-transparent py-1.5 px-6 text-[#0162E8] rounded-md">Return to Previous Location</button>
                    <button className="md:hidden border-2 border-[#0162E8] bg-transparent py-1.5 px-6 text-[#0162E8] rounded-md">Back</button>
                    <button className="rounded-md px-6 py-2 text-white bg-[#186BAD] flex items-center gap-1">
                        <span>Next</span><FaChevronRight />
                    </button>
                </div> */}
            </div>
        </div>
    );
}