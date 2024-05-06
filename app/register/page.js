'use client'
import Image from "next/image";
import Logo from '@/public/logo.png'
import { FaChevronRight } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import AcademicInfo from "../components/AcademicInfo";
import PreferInfo from "../components/PreferInfo";
import GoalInfo from "../components/GoalInfo";
import TcInfo from "../components/TcInfo";
import CfmPage from "../components/CfmPage";
import OkPage from "../components/OkPage";

export default function Register() {

    const [page, setPage] = useState(0);
    const [pdata, setPdata] = useState({
        fname: '',
        lname: '',
        email: '',
        cnumber: '',
        gender: '',
        age: '',
        gradeYear: '',
        location: '',
        subjects: '',
        attendance: '',
        avail: '',
        preference: '',
        lang: '',
        stg: '',
        ltg: '',
    });

    const PageDisplay = () => {
        if(page === 0) {
            return <PersonalInfo handleNext={handleNext} goTo={goTo} pdata={pdata} setPdata={setPdata} />
        } else if(page === 1) {
            return <AcademicInfo handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} pdata={pdata} setPdata={setPdata} />
        } else if(page === 2) {
            return <PreferInfo handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} pdata={pdata} setPdata={setPdata} />
        } else if(page === 3) {
            return <GoalInfo handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} pdata={pdata} setPdata={setPdata} />
        } else if(page === 4) {
            return <TcInfo handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} />
        } else if(page === 5) {
            return <CfmPage handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} />
        } else if(page === 6) {
            return <OkPage handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} />
        } else {
            return <OkPage handleNext={handleNext} handlePrev={handlePrev} goTo={goTo} />
        }
        
    }

    const goTo = (id) => {
        setPage(id);
    }

    const handleNext = () => {
        setPage((currPage) => currPage + 1);
    }

    const handlePrev = () => {
        setPage((currPage) => currPage - 1);
    }

    return (
        <div className="w-full">
            {PageDisplay()}
        </div>
    );
}