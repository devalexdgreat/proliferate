import Image from "next/image";
import Logo from '@/public/logo.png'
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";

export default function TcInfo({ handleNext, handlePrev, goTo }) {
    return (
        <div className="w-full md:w-11/12 mx-auto md:h-screen">
            <div className="w-11/12 mx-auto md:w-full py-4 md:py-0 mt-2">
                <div className="h-full w-52">
                    <Image src={Logo} className="" alt="Proliferate Logo" />
                </div>
            </div>
            <div className="mb-4 bg-[#186BAD] p-4 text-white text-sm md:hidden">
                <h1 className="font-bold text-center">Terms and Conditions</h1>
            </div>
            <div className="w-11/12 md:w-11/12 mx-auto">
                <div className="mb-4 hidden md:block">
                    <h1 className="font-bold text-center">Terms and Conditions</h1>
                </div>
                <div className="w-full hidden md:flex justify-center items-center mb-4">
                    <div className="grid grid-cols-5 divide-[#C9C9C9] divide-x border rounded-md">
                        <button onClick={() => goTo(0)} className="p-2 text-sm">Personal information</button>
                        <button onClick={() => goTo(1)} className="p-2 text-sm">Academic Details</button>
                        <button onClick={() => goTo(2)} className="p-2 text-sm">Preferences</button>
                        <button onClick={() => goTo(3)} className="p-2 text-sm">Learning Goals</button>
                        <button onClick={() => goTo(4)} className="p-2 text-sm bg-[#1F70B2] text-white rounded-e-md">Terms & Conditions</button>
                    </div>
                </div>
                <div className="w-full md:border md:shadow-lg rounded-md">
                    <div className="w-full md:w-11/12 mx-auto">
                        <div className="md:h-[45vh] md:overflow-y-scroll md:py-5 my-5 text-sm">
                            Welcome to Proliferate Learning Management System (LMS). Before you proceed with using our platform, please carefully read and understand the following terms and conditions:
                            <br/>
                            <div className="flex gap-1">
                                <div>1. </div>
                                <div>
                                    Acceptance of Terms: By accessing or using the Proliferate LMS platform, you agree to be bound by these terms and conditions, our privacy policy, and all applicable laws and regulations. If you do not agree with any part of these terms, you may not access or use the platform.
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>2. </div>
                                <div>
                                    User Registration: You must register an account with accurate and complete information to access certain features of the platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>3. </div>
                                <div>
                                    Use of Platform: Proliferate LMS provides a platform for educational purposes, including access to learning materials, tutoring services, and communication tools. You agree to use the platform only for lawful purposes and in accordance with these terms and conditions.
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>4. </div>
                                <div>
                                    User Content: You retain ownership of any content you submit, upload, or post on the platform. By providing content, you grant Proliferate LMS a worldwide, non-exclusive, royalty-free license to use, modify, reproduce, and distribute your content for the purpose of operating and improving the platform.
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>5. </div>
                                <div>
                                    Tutoring Services: Proliferate LMS connects students with tutors for educational purposes. We do not guarantee the availability, quality, or effectiveness of tutoring services, and we are not responsible for any interactions or disputes between users.
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>6. </div>
                                <div>
                                    Payment and Billing: Certain features or services on the platform may require payment. By using these features or services, you agree to pay any applicable fees and charges. All payments are non-refundable unless otherwise stated. If a student is unable to attend a class, they may have the option to reschedule the class subject to the tutor&rsquo;s availability. However, if no early notification of class rescheduling is provided, the missed class will not be refunded. In the event of a missed class due to the tutor&rsquo;s unavailability or technical issues, the tutor will offer an alternative class schedule.
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>7. </div>
                                <div>
                                    Platform Content and Intellectual Property: All content available on the platform, including courses, materials, and resources, are the intellectual property of Proliferate and its tutors. Any unauthorized use, reproduction, or distribution of the content is strictly prohibited. Online tutors retain the rights to their course content. Learners may not share, reproduce, or distribute course materials without the tutor&rsquo;s permission.
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>8. </div>
                                <div>
                                    Code of Conduct: Users must conduct themselves respectfully and professionally while interacting on the platform. Any form of harassment, discrimination, or inappropriate behavior will not be tolerated and may result in account termination.
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>9. </div>
                                <div>
                                    Privacy and Security: Your privacy and security are important to us. Please review our privacy policy to understand how we collect, use, and protect your personal information.
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>10. </div>
                                <div>
                                    Modifications to Terms: Proliferate LMS reserves the right to update or modify these terms and conditions at any time without prior notice. Your continued use of the platform after any such changes constitutes your acceptance of the revised terms.
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>11. </div>
                                <div>
                                    Termination of Account: Proliferate LMS reserves the right to suspend or terminate your account and access to the platform at any time for any reason, including but not limited to violation of these terms and conditions. 
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <div>12. </div>
                                <div>
                                    Contact Us: If you have any questions or concerns about these terms and conditions, please contact us at contact@proliferate.ai
                                </div>
                            </div>
                            <div className="w-full mt-2">
                                <span>By clicking &rdquo;Next&rdquo; or by accessing and using the Proliferate LMS platform, you acknowledge that you have read, understood, and agreed to these terms and conditions.</span>
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