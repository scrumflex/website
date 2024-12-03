import { useRef } from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

function Articles() {
    const myRef = useRef(null);
    return (
        <>
        <Navbar buttonRef = {myRef} />
        <section className="bg-[url('/students.jpg')] flex justify-center items-center bg-blend-overlay w-full bg-cover object-cover bg-black/20 bg-[50%_32%] bg-no-repeat h-[200px] lg:h-[398px]">
            <h1 className="font-montserrat text-white text-[32px] font-[700]">Articles</h1>
        </section>
        <section className="mt-6 md:mt-12 md:px-24 px-12">
        <h3 className="text-[24px] font-montserrat mb-3 font-bold">Popular Articles</h3>
           <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
                <div className="cursor mb-12">
                        <img className="w-full" src="./article-img1.svg" alt="Young persons discussing over a table, all with a jotter and a pen." />
                        <div>
                            <p className="text-[14px] text-[#757272] my-2 font-montserrat">January 23, 2023</p>
                            <a href="https://medium.com/@aimiuwutonia/starting-a-career-in-tech-five-things-you-need-to-know-abdddb558258">
                                <h4 className="text-[20px] font-montserrat font-bold">Starting a Career in Tech: Five Things you Need to Know</h4>
                            </a>
                            <p className="text-[14px] text-[#575454] mt-2 font-montserrat">Everyone says tech is the new oil, but no one tells you how saturated the industry is, how you literally have...</p>
                        </div>
                </div>
                <div className="cursor mb-12">
                        <div className="cursor md:mb-6 mb-12 md:flex md:justify-center md:gap-4">
                            <img className="w-full md:w-[240px] md:h-[178px]" src="./article-img2.svg" alt="Young persons discussing over a table, all with a jotter and a pen." />
                            <div>
                                <p className="text-[14px] text-[#757272] my-2 font-montserrat">March 6, 2023</p>
                                <a href="https://medium.com/@aimiuwutonia/5-reasons-why-you-should-become-a-certified-scrum-master-3a9e004fa0a9">
                                    <h4 className="text-[20px] font-montserrat font-bold">5 Reasons why you should become a Certified Scrum Master</h4>
                                </a>
                                <p className="text-[14px] md:hidden text-[#575454] mt-2 font-montserrat">With the rise of Technology in the digital world, the gospel of being a Tech guy or Tech sis has tremendously increased over the years...</p>
                            </div>
                        </div>
                        <div className="cursor md:mb-6 mb-12 md:flex md:justify-center md:gap-4">
                            <img className="w-full md:w-[240px] md:h-[178px]" src="./article-img4.svg" alt="Young persons discussing over a table, all with a jotter and a pen." />
                            <div>
                                <p className="text-[14px] text-[#757272] my-2 font-montserrat">May 17, 2023</p>
                                <a target="_blank" href="https://medium.com/@aimiuwutonia/8-hats-worn-by-scrum-masters-3187f6e06c8c">
                                    <h4 className="text-[20px] font-montserrat font-bold">8 Hats worn by Scrum Masters</h4>
                                </a>
                                <p className="text-[14px] md:hidden text-[#575454] mt-2 font-montserrat">A Scrum master is not a role but an accountability. Anyone in the organization with leadership skills can take the role of a scrum master,...</p>
                            </div>
                        </div>
                        <div className="cursor md:mb-6 mb-12 md:flex md:justify-center md:gap-4">
                            <img className="w-full md:w-[240px] md:h-[178px]" src="./article-img3.svg" alt="Young persons discussing over a table, all with a jotter and a pen." />
                            <div>
                                <p className="text-[14px] text-[#757272] my-2 font-montserrat">August 28, 2023</p>
                                <a href="https://medium.com/@aimiuwutonia/a-z-of-becoming-a-scrum-master-fe836811db74">
                                    <h4 className="text-[20px] font-montserrat font-bold">A-Z Of Becoming A Scrum Master</h4>
                                </a>
                                <p className="text-[14px] md:hidden text-[#575454] mt-2 font-montserrat">“A-Z of becoming a Scrum Master” takes you on an alphabetical journey of the essential concepts and practices that defines the role of a Scrum Master...</p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
        <section className="mt-6 md:px-24 px-12">
            <h3 className="text-[24px] font-montserrat mb-3 font-bold">Latest Articles</h3>
            <div className="mb-12 md:grid md:grid-cols-3 md:place-content-center">
                <div className="mb-12 md:w-[324px]">
                    <img className="w-full md:w-[324px] md:h-[225px]" src="./article-img5.svg" alt="Young persons discussing over a table, all with a jotter and a pen." />
                    <div>
                        <p className="text-[14px] text-[#757272] my-2 font-montserrat">August 19, 2024</p>
                        <a className="cursor" target="_blank" href="https://medium.com/@aimiuwutonia/overcoming-imposter-syndrome-c1d449462cdc">
                            <h4 className="text-[20px] font-montserrat font-bold">Overcoming Imposter Syndrome</h4>
                        </a>
                        <p className="text-[14px] text-[#575454] mt-2 font-montserrat">I’ve come to realize that regardless of how successful or accomplished we are, imposter syndrome affects everyone — myself included...</p>
                    </div>
                </div>
                <div className="cursor mb-12 md:w-[324px]">
                    <img className="w-full md:w-[324px] md:h-[225px]" src="./article-img6.svg" alt="Young persons discussing over a table, all with a jotter and a pen." />
                    <div>
                        <p className="text-[14px] text-[#757272] my-2 font-montserrat">December 30, 2023</p>
                        <a href="https://medium.com/@aimiuwutonia/from-novice-to-scrum-master-a-gratitude-fueled-journey-9dadb96b902d">
                            <h4 className="text-[20px] font-montserrat font-bold">From Novice to Scrum Master: A Gratitude-Fueled Journey</h4>
                        </a>
                        <p className="text-[14px] text-[#575454] mt-2 font-montserrat">In the whirlwind of a year, my tech journey has been nothing short of transformative...</p>
                    </div>
                </div>
                <div className="cursor mb-12 md:w-[324px]">
                <img className="w-full md:w-[324px] md:h-[225px]" src="./article-img7.svg" alt="Young persons discussing over a table, all with a jotter and a pen." />
                <div>
                    <p className="text-[14px] text-[#757272] my-2 font-montserrat">September 8, 2023</p>
                    <a href="https://medium.com/@aimiuwutonia/10-soft-skills-a-scrum-master-should-develop-1541e0e2b747">
                        <h4 className="text-[20px] font-montserrat font-bold">10 Soft Skills a Scrum Master should Develop</h4>
                    </a>
                    <p className="text-[14px] text-[#575454] mt-2 font-montserrat">As a Scrum Master starting out it’s necessary to hone or develop certain skillsets...</p>
                </div>
                </div>
            </div>
        </section>
        <ContactUs formRef = {myRef} />
        <Footer />
    </>
    )
}

export default Articles;