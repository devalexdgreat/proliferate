import Image from "next/image";
import Logo from '@/public/logo.png'
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

export default function PreferInfo({ handleNext, handlePrev, goTo, pdata, setPdata }) {
    return (
        <div className="w-full md:w-11/12 mx-auto md:h-screen">
            <div className="w-11/12 mx-auto md:w-full py-4 md:py-0 mt-2">
                <div className="h-full w-52">
                    <Image src={Logo} className="" alt="Proliferate Logo" />
                </div>
            </div>
            <div className="mb-4 bg-[#186BAD] p-4 text-white text-sm md:hidden">
                <h1 className="font-bold text-center">Student Registration | Preferences</h1>
            </div>
            <div className="w-11/12 md:w-11/12 mx-auto">
                <div className="mb-4 hidden md:block">
                    <h1 className="font-bold text-center">Student Registration | Preferences</h1>
                </div>
                <div className="w-full hidden md:flex justify-center items-center mb-4">
                    <div className="grid grid-cols-5 divide-[#C9C9C9] divide-x border rounded-md">
                        <button onClick={() => goTo(0)} className="p-2 text-sm">Personal information</button>
                        <button onClick={() => goTo(1)} className="p-2 text-sm">Academic Details</button>
                        <button onClick={() => goTo(2)} className="p-2 text-sm bg-[#1F70B2] text-white">Preferences</button>
                        <button onClick={() => goTo(3)} className="p-2 text-sm">Learning Goals</button>
                        <button onClick={() => goTo(4)} className="p-2 text-sm">Terms & Conditions</button>
                    </div>
                </div>
                <div className="w-full md:border md:shadow-lg rounded-md">
                    <h1 className="w-full md:w-8/12 text-sm mx-auto text-center mt-2">
                        Choose whether you prefer online or in-person tutoring and specify your availability for sessions. 
                        You can also mention any additional preferences or requirements you have for the tutoring sessions.
                    </h1>
                    <div className="w-full md:w-11/12 mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-12">
                            <div className="flex flex-col">
                                <label className="font-bold mb-1">Availability:<span className="text-red-600">*</span></label>
                                <select value={pdata.avail} onChange={(e) => setPdata({ ...pdata, avail: e.target.value })} className="rounded-md border border-[#ddd] bg-white py-2 ps-3">
                                    <option>Select availability</option>
                                    <option>Weekdays</option>
                                    <option>Mornings</option>
                                    <option>Afternoons</option>
                                    <option>Evenings</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="font-bold mb-1 text-sm">Additional Preferences/Requirements:</label>
                                <textarea value={pdata.preference} onChange={(e) => setPdata({ ...pdata, preference: e.target.value })} rows='2' className="rounded-md resize-none border border-[#ddd] bg-white py-2 ps-3" placeholder="Specify any additional preferences or requirements">
                                </textarea>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-6 mb-6 md:mb-12">
                            <div className="flex flex-col">
                                <label className="font-bold mb-1">Communication Language:<span className="text-red-600">*</span></label>
                                <select value={pdata.lang} onChange={(e) => setPdata({ ...pdata, lang: e.target.value })} className="rounded-md border border-[#ddd] bg-white py-2 ps-3">
                                    <option>Select language</option>
                                    <option>English</option>
                                    <option>deutsch</option>
                                    <option>french</option>
                                    <option>brazil</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:border md:shadow-lg rounded-md mt-6 mb-5 md:mb-0 p-3 flex justify-between">
                    <button onClick={() => handlePrev()} className="hidden md:block border-2 border-[#0162E8] bg-transparent py-1.5 px-6 text-[#0162E8] rounded-md">Return to Previous Location</button>
                    <button onClick={() => handlePrev()} className="md:hidden border-2 border-[#0162E8] bg-transparent py-1.5 px-6 text-[#0162E8] rounded-md">Back</button>
                    <button onClick={() => handleNext()} className="rounded-md px-6 py-2 text-white bg-[#186BAD] flex items-center gap-1">
                        <span>Next</span><FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}