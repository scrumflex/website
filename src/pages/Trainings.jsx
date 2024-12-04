import { Link } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import { VscPass } from "react-icons/vsc";
import { useRef, useState } from "react";

function Trainings() {
    const myRef = useRef(null);
    const [psm, setPsm] = useState(false);
    const [pspo, setPspo] = useState(false);

    const handleOpenModal = () => setPsm(true);
    const handlePspoModal = () => setPspo(true);
    return (
        <>
            <Navbar buttonRef = {myRef} />
            <section className="bg-[url('/students.jpg')] flex justify-center items-center bg-blend-overlay w-full bg-cover object-cover bg-black/20 bg-[50%_32%] bg-no-repeat h-[200px] lg:h-[398px]">
                <h1 className="font-montserrat text-white text-[32px] font-[700]">TRAININGS</h1>
            </section>
            <section className="m-12 lg:justify-center lg:items-center lg:gap-10 lg:flex">
                <div className="bg-[#575454] text-white p-6 mb-4 lg:mb-0 lg:px-10 lg:w-[451px] text-center rounded-[10px]">
                    <h2 className="pb-4 font-montserrat font-semibold">Professional Scrum Master (PSM) I</h2>
                    
                    <button onClick={handleOpenModal} className="bg-transparent border-[#FFFFFF] border-[1.5px] lg:mt-6 mt-2 mb-4 lg:mb-0 font-[700] font-montserrat text-[#FFFFFF] rounded-[5px] w-[140px] lg:w-[166px] lg:h-[48px] h-[38px]" >
                        Learn More
                    </button>
                    
                </div>
                <div className="bg-[#575454] text-white text-center p-6 lg:px-10 lg:w-[451px] rounded-[10px]">
                    <h2 className="pb-4 font-montserrat font-semibold">Professional Scrum Product Owner (PSPO) </h2>
        
                    <button onClick={handlePspoModal} className="bg-transparent border-[#FFFFFF] text-white border-[1.5px] lg:mt-6 mt-2 mb-4 lg:mb-0 font-[700] font-montserrat rounded-[5px] w-[140px] lg:w-[166px] lg:h-[48px] h-[38px]" >
                        Learn More
                    </button>
                  
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
            {/* Modal */}

           {
            psm && (
                <div className="fixed font-montserrat inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Professional Scrum Master (PSM) I</h2>
                    <button className="text-gray-500 text-3xl hover:text-gray-700" onClick={()=>setPsm(false)}>
                        &times;
                    </button>
                    </div>
                    <p className="text-gray-600 mb-6">
                    This globally recognized certification, offered by scrum.org, validates your understanding of the Scrum Framework, its principles, and the role of a Scrum Master. It's ideal for aspiring Scrum Masters, Agile enthusiasts, and project managers.
                    </p>
                </div>
                </div>
            )
           }
            {
            pspo && (
                <div className="fixed font-montserrat inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Professional Scrum Product Owner (PSPO)</h2>
                    <button className="text-gray-500 text-3xl hover:text-gray-700" onClick={()=>setPspo(false)}>
                        &times;
                    </button>
                    </div>
                    <p className="text-gray-600 mb-6">
                    This globally recognized certification, offered by scrum.org, assesses your knowledge of Scrum from a Product Owner’s perspective and your ability to deliver value. Ideal for Product Owners, business analysts, and anyone involved in value delivery within Agile projects.
                    </p>
                </div>
                </div>
            )
           }

            {/* End of Modal */}
            <ContactUs formRef = {myRef} />
            <Footer />
        </>
    )
}

export default Trainings;