import Image from "next/image";
import Logo from '@/public/logo.png'
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

export default function PersonalInfo({ handleNext, goTo, pdata, setPdata }) {
    return (
        <div className="w-full md:w-11/12 mx-auto md:h-screen">
            <div className="w-11/12 mx-auto md:w-full py-4 md:py-0 mt-2">
                <div className="h-full w-52">
                    <Image src={Logo} className="" alt="Proliferate Logo" />
                </div>
            </div>
            <div className="mb-4 bg-[#186BAD] p-4 text-white text-sm md:hidden">
                <h1 className="font-bold text-center">Student Registration | Personal Information</h1>
            </div>
            <div className="w-11/12 md:w-11/12 mx-auto">
                <div className="mb-4 hidden md:block">
                    <h1 className="font-bold text-center">Student Registration | Personal Information</h1>
                </div>
                <div className="w-full hidden md:flex justify-center items-center mb-4">
                    <div className="grid grid-cols-5 divide-[#C9C9C9] divide-x border rounded-md">
                        <button onClick={() => goTo(0)} className="p-2 text-sm bg-[#1F70B2] text-white rounded-s-md">Personal information</button>
                        <button onClick={() => goTo(1)} className="p-2 text-sm">Academic Details</button>
                        <button onClick={() => goTo(2)} className="p-2 text-sm">Preferences</button>
                        <button onClick={() => goTo(3)} className="p-2 text-sm">Learning Goals</button>
                        <button onClick={() => goTo(4)} className="p-2 text-sm">Terms & Conditions</button>
                    </div>
                </div>
                <div className="w-full md:border md:shadow-lg rounded-md">
                    <h1 className="w-full md:w-9/12 text-sm mx-auto text-center mt-2">
                        Please provide your full name, email address, contact number, gender and age. Ensure that the information is accurate and up-to-date.
                    </h1>
                    <div className="w-full md:w-11/12 mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-12">
                            <div className="flex flex-col">
                                <label className="font-bold mb-1">First Name:<span className="text-red-600">*</span></label>
                                <input value={pdata.fname} onChange={(e) => setPdata({ ...pdata, fname: e.target.value })} type="name" className="rounded-md border border-[#ddd] bg-white py-2 ps-3" placeholder="First Name" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold mb-1">Last Name:<span className="text-red-600">*</span></label>
                                <input value={pdata.lname} onChange={(e) => setPdata({ ...pdata, lname: e.target.value })} type="name" className="rounded-md border border-[#ddd] bg-white py-2 ps-3" placeholder="Last Name" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold mb-1">Email Address:<span className="text-red-600">*</span></label>
                                <input value={pdata.email} onChange={(e) => setPdata({ ...pdata, email: e.target.value })} type="email" className="rounded-md border border-[#ddd] bg-white py-2 ps-3" placeholder="Enter your email address" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-6 mb-6 mb:mb-6 lg:mb-12">
                            <div className="flex flex-col">
                                <label className="font-bold mb-1">Contact Number:<span className="text-red-600">*</span></label>
                                <input value={pdata.cnumber} onChange={(e) => setPdata({ ...pdata, cnumber: e.target.value })} type="number" className="rounded-md border border-[#ddd] bg-white py-2 ps-3" placeholder="Enter your contact number" />
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold mb-1">Gender:<span className="text-red-600">*</span></label>
                                <select value={pdata.gender} onChange={(e) => setPdata({ ...pdata, gender: e.target.value })} className="rounded-md border border-[#ddd] bg-white py-2 ps-3">
                                    <option>Select gender</option>
                                    <option>Male</option>
                                    <option>female</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold mb-1">Age:<span className="text-red-600">*</span></label>
                                <input value={pdata.age} onChange={(e) => setPdata({ ...pdata, age: e.target.value })} type="number" className="rounded-md border border-[#ddd] bg-white py-2 ps-3" placeholder="Enter your age" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:border md:shadow-lg rounded-md mt-6 mb-5 md:mb-0 p-3 flex justify-end">
                    <button onClick={() => handleNext()} className="rounded-md px-6 py-2 text-white bg-[#186BAD] flex items-center gap-1">
                        <span>Next</span><FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}