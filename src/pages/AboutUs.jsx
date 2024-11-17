import Navbar from "../components/Nav";
import amen from "../assets/amen.png";
import arono from "../assets/arono.png";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useRef } from "react";
import CoreValues from "../components/coreValues";

function AboutUs() {
    const myRef = useRef(null);
    return (
        <>
            <Navbar buttonRef = {myRef} />
            <section className="bg-[url('/image25.jpg')] flex justify-center items-center bg-black/50 bg-blend-overlay w-full bg-cover object-cover bg-top bg-no-repeat h-[200px] lg:h-[278px]">
                <h1 className="font-montserrat text-white text-[32px] font-[700]">ABOUT US</h1>
            </section>
            <section className="font-montserrat pt-4 px-6 lg:px-24 lg:py-16">
                <h2 className="font-[700] text-[26px] lg:text-[32px] leading-[56.61px]">Who we are</h2>
                <p className="leading-[28.34px] text-[14px]">At ScrumFlex, we empower individuals and organizations through practical, interactive Scrum training. Founded by an experienced Agile Coach, we bring a wealth of knowledge and experience to our training programs.Our mission is to provide effective training for all levels, ensuring participants can pass the PSM I exam in one sitting and apply Agile principles to enhance collaboration, innovation and continuous improvement in their various projects and teams.</p>
            </section>
            <CoreValues />
            <div className="lg:px-24 mt-6 px-6 lg:mb-8">
                <section className="lg:flex lg:gap-12 lg:justify-center lg:items-center">
                    <img className="lg:float-right lg:w-[487px] lg:h-[353px] lg:m-2" src={amen} />
                    <div>
                    <h2 className="font-montserrat font-[700] text-[26px] mt-6 lg:mt-0 lg:text-[32px] mb-3">Meet Amen</h2>
                    <p className="font-montserrat leading-[28.34px] text-[14px] lg:text-[15px] text-[#575454]">Hiya I'm Amen, A Certified Scrum Master, Scrum trainer, Researcher, 
                        Lead Community Manager of Scrum Master Africa and the founder of Scrumflex. 
                        I've been privileged to have trained over 50 aspiring and enthusiastic Scrum 
                        Masters across 4 countries. 
                        One of the things I'm often asked is "What inspired you to start a career 
                        in Tech when you have a science background?"
                    </p>
                    <Link to="/website/learn-more">
                    <button className="bg-[#4ABE99] lg:mt-6 mt-2 mb-4 lg:mb-0 text-white rounded-[5px] w-[166px] h-[48px]" >
                        Learn More
                    </button>
                    </Link>
                    </div>
                </section>
            </div>
            <section className="bg-[#F7F7F7] font-montserrat px-6 lg:pt-11 lg:px-24">
                <h2 className="text-[26px] lg:text-[32px] py-4 font-[700]">Meet The Team</h2>
                <div className="w-full lg:flex lg:flex-col lg:items-center lg:justify-center">
                    {/* Cards Wrapper */}
                    <div className="relative w-full">
                        <div
                        className="lg:flex">
                            <div className="w-full font-montserrat px-6 lg:gap-5 lg:pb-12 lg:pt-8 flex-shrink-0 lg:flex lg:items-center lg:justify-center">
                            <div className="mb-4 lg:mb-0 w-full rounded-lg shadow-lg p-5 py-7 bg-white">
                                <div className='flex gap-3 items-center'>
                                <img src={arono} className='w-[88px] h-[73px]' alt="" />
                                <div className="font-montserrat">
                                    <p className='font-[700] text-[16px]'>Aronu Chinenye</p>
                                    <p className='text-[12px]'>Operations Manager</p>
                                </div>
                                </div>
                                <div className='text-[#575454] font-[500] font-montserrat text-[15px] my-4 leading-[26.69px]'>Meet the ever resourceful and vibrant Aronu Chinenye, who has over 3 years of experience in managing projects and giving detailed administrative support as a Project Manager. Her experiences cuts across different industries and she has since been making impact especially in the IT space.</div>
                            </div>  
                            <div className="mb-8 lg:mb-0 w-full rounded-lg shadow-lg p-5 py-7 bg-white">
                                <div className='flex gap-3 items-center'>
                                <img src={arono} className='w-[88px] h-[73px]' alt="" />
                                <div className="font-montserrat">
                                    <p className='font-[700] text-[16px]'>Aronu Chinenye</p>
                                    <p className='text-[12px]'>Operations Manager</p>
                                </div>
                                </div>
                                <div className='text-[#575454] font-montserrat font-[500] text-[15px] my-4 leading-[26.69px]'>Meet the ever resourceful and vibrant Aronu Chinenye, who has over 3 years of experience in managing projects and giving detailed administrative support as a Project Manager. Her experiences cuts across different industries and she has since been making impact especially in the IT space.</div>
                            </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactUs formRef = {myRef} />
            <Footer />
        </>
    )
}

export default AboutUs;