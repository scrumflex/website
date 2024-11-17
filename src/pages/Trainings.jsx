import { Link } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import { VscPass } from "react-icons/vsc";
import { useRef } from "react";

function Trainings() {
    const myRef = useRef(null);
    return (
        <>
            <Navbar buttonRef = {myRef} />
            <section className="bg-[url('/image25.jpg')] flex justify-center items-center bg-black/50 bg-blend-overlay w-full bg-cover object-cover bg-top bg-no-repeat h-[200px] lg:h-[278px]">
                <h1 className="font-montserrat text-white text-[32px] font-[700]">TRAININGS</h1>
            </section>
            <section className="m-12 lg:justify-center lg:items-center lg:gap-10 lg:flex">
                <div className="bg-[#575454] text-white p-6 mb-4 lg:mb-0 lg:px-10 lg:w-[451px] text-center rounded-[10px]">
                    <h2 className="pb-4 font-montserrat font-semibold">Professional Scrum Master (PSM) I</h2>
                    <Link to="">
                    <button className="bg-transparent border-[#FFFFFF] border-[1.5px] lg:mt-6 mt-2 mb-4 lg:mb-0 font-[700] font-montserrat text-[#FFFFFF] rounded-[5px] w-[140px] lg:w-[166px] lg:h-[48px] h-[38px]" >
                        Click Here
                    </button>
                    </Link>
                </div>
                <div className="bg-[#575454] text-white text-center p-6 lg:px-10 lg:w-[451px] rounded-[10px]">
                    <h2 className="pb-4 font-montserrat font-semibold">Professional Scrum Product Owner (PSPO)  </h2>
                    <Link to="">
                    <button disabled className="bg-transparent border-[#FFFFFF] text-white border-[1.5px] lg:mt-6 mt-2 mb-4 lg:mb-0 font-[700] font-montserrat rounded-[5px] w-[140px] lg:w-[166px] lg:h-[48px] h-[38px]" >
                        Click Here
                    </button>
                    </Link>
                </div>
            </section>
            <section className="p-12 lg:px-24 lg:py-20 lg:flex lg:justify-center lg:gap-6 lg:items-center bg-[#F7F7F7]">
                <div className="bg-[#FFFFFF] p-6 mb-4 lg:w-[350px] text-center rounded-[10px]">
                    <h2 className="pb-4 font-montserrat font-[500] lg:my-3 whitespace-nowrap text-[18px]">GROUP TRAINING</h2>
                    <div className="font-montserrat text-[14px]">
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">Learn at the pace of the group</p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">Professional Certificate</p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                        <div><VscPass /></div><p className="text-left">Interactions among multiple participants, fostering collaborative learning and shared experiences.</p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">Fixed Scheduling</p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">For 4 weeks</p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">
                            Post training support
                            </p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">
                            Access to Community of practice
                            </p>
                        </div>
                    </div>
                    <button className="bg-[#4ABE99] lg:my-4 mt-2 mb-4 font-montserrat font-bold text-white rounded-[5px] w-[166px] h-[48px]" >
                        Enroll Now
                    </button>
                </div>
                <div className="bg-[#FFFFFF] p-6 mb-4 lg:w-[350px] text-center rounded-[10px]">
                    <h2 className="pb-4 font-montserrat font-[500] whitespace-nowrap lg:my-3 text-[18px]">ONE-ON-ONE TRAININGS</h2>
                    <div className="font-montserrat text-[14px]">
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">Learn at the pace of the group</p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">Professional Certificate</p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                        <div><VscPass /></div><p className="text-left">Interactions among multiple participants, fostering collaborative learning and shared experiences.</p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">Fixed Scheduling</p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">For 4 weeks</p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">
                            Post training support
                            </p>
                        </div>
                        <div className="flex gap-3 items-center mb-3">
                            <div><VscPass /></div>
                            <p className="text-left">
                            Access to Community of practice
                            </p>
                        </div>
                    </div>
                    <button className="bg-[#4ABE99] lg:my-4 mt-2 mb-4 font-montserrat font-bold text-white rounded-[5px] w-[166px] h-[48px]" >
                        Enroll Now
                    </button>
                </div>
            </section>
            <ContactUs formRef = {myRef} />
            <Footer />
        </>
    )
}

export default Trainings;