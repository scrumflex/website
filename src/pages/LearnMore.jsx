import Navbar from "../components/Nav";
import amen from "../assets/picture1.svg";
import amen2 from "../assets/picture2.png";
import amen3 from "../assets/picture3.png";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { useRef } from "react";

function LearnMore() {
    const myRef = useRef(null);
    return (
        <>
            <Navbar buttonRef = {myRef} />
            <section className="bg-[url('/scholarship.jpeg')] flex justify-center items-center bg-black/50 bg-blend-overlay w-full bg-cover object-cover bg-center bg-no-repeat h-[200px] lg:h-[278px]">
                <h1 className="font-montserrat text-white text-[32px] font-[700]">ABOUT US</h1>
            </section>
            <div className="lg:px-24 mt-6 px-6 lg:mb-8">
            <section className="mb-6">
                <img className="float-right lg:w-[487px] lg:h-[353px] m-2" src={amen} />
                <h2 className="font-montserrat mt-12 font-[700] text-[32px] mb-3">Meet Amen</h2>
                <p className="font-montserrat leading-[28.34px] text-[15px] text-[#575454]">Hiya I'm Amen, A Certified Scrum Master, Scrum trainer, Researcher, 
                    Lead Community Manager of Scrum Master Africa and the founder of Scrumflex. 
                    I've been privileged to have trained over 50 aspiring and enthusiastic Scrum 
                    Masters across 4 countries. 
                    One of the things I'm often asked is "What inspired you to start a career 
                    in Tech when you have a science background?" For as long as I can remember, 
                    I have loved talking, and anyone who knows me can attest to that. 
                    During my master's program at the University of Ibadan, I realized that 
                    Biochemistry wasn't for me because of its abstract and theoretical nature.
                </p>
                <p className="font-montserrat leading-[28.34px] text-[15px] text-[#575454]">As a creative and innovative individual, I always wanted to channel these aspects of my life into any career I pursued.</p>
                <p className="font-montserrat leading-[28.34px] text-[15px] text-[#575454]">By the time I completed my Master's, I was already managing two businesses and had created initiatives to help small business 
                    owners stand out in the ever-evolving ecosystem. At that point, I knew there was no turning back, as I had invested heavily 
                    in my entrepreneurial journey by attending business conferences, workshops, and training sessions. I have had the opportunity 
                    to share the same room with and be mentored by business experts like TriciaBiz, Jimi Tewe, Steve Harris, and the late Ubong King. 
                    In 2020, everything changed for my business due to the COVID-19 pandemic. I felt lost and depressed and realized that I wanted more out of life.
                     It occurred to me that I needed to be more open-minded and consider another career path. I decided to take a 4-month social media detox to reevaluate my life and choices, 
                     during which I wrote a memoir about my experiences. 
                     </p>
            </section>
            <section className="mb-6">
                <img className="float-left lg:w-[487px] lg:h-[353px] m-2" src={amen2} />
                <p className="font-montserrat leading-[28.34px] text-[15px] text-[#575454]">During my detox, I conducted extensive research and decided to start a career in tech as a Project Manager, leveraging the various transferable skills I had developed as an entrepreneur and founder of various initiatives. I began by taking courses on UDEMY and reaching out to friends in the tech space for advice and mentorship. I also used this time for personal development.
                In November 2021, I received a provisional scholarship to an academy for project management and officially started my career in January the following year. In 2022, I embarked on my journey as a Project Manager in the tech space. I sought professional advice from a mentor who worked at my company. He suggested that I prepare to become a certified Scrum Master, as many tech companies were transitioning to Agile methodologies. 
                </p>
                <p className="font-montserrat leading-[28.34px] text-[15px] text-[#575454]">I researched the role of a Scrum Master, and the rest, as they say, is history. What gave you the bravery to start a training platform when you had just an ample knowledge about becoming a Scrum Master?
I strongly believe in the saying, “You learn twice by teaching.” Remember when I told you about preparing for the PSM I exam that a mentor advised me to enroll in? Well, I did enroll, took the exam, and passed it just six months into my tech career. What a flex, right? After working there for a year, I realized there was so much more to learn in the tech space, so I decided to pursue a career as a Scrum Master.
 
                     </p>
            </section>
            <section className="mb-6">
                <img className="float-right lg:w-[487px] lg:h-[353px] m-2" src={amen3} />
                <p className="font-montserrat leading-[28.34px] text-[15px] text-[#575454]">I researched the role of a Scrum Master, and the rest, as they say, is history. What gave you the bravery to start a training platform when you had just an ample knowledge about becoming a Scrum Master?
I strongly believe in the saying, “You learn twice by teaching.” Remember when I told you about preparing for the PSM I exam that a mentor advised me to enroll in? Well, I did enroll, took the exam, and passed it just six months into my tech career. What a flex, right? After working there for a year, I realized there was so much more to learn in the tech space, so I decided to pursue a career as a Scrum Master.
 
                </p>
                <p className="font-montserrat leading-[28.34px] text-[15px] text-[#575454]">Anyone who has worked with me or been tutored by me knows that "Amen knows her onions."
                I am not your typical tutor. I won’t tell you to be afraid of failure; I will advise you to embrace it with open arms because I believe in "empiricism," which is what "Scrum" is built upon.</p>
                <p className="font-montserrat leading-[28.34px] text-[15px] text-[#575454]">
                One of my favorite quotes is, "It doesn’t matter if it takes you years to get it right…. The most important thing is you got it RIGHT."I won’t tell you to cut your coat according to your material; instead, I’d tell you to acquire more material so you can have room for growth.
That’s how we roll! We are all about vibes and making learning fun, and that’s how ScrumFlex came to be. We value customer collaboration over contract negotiation.From a biochemist to a business owner, initiative founder, project manager, community manager of the Scrum Master Africa, to coaching aspiring Scrum Masters.I am undeniable proof that………..You should never stop betting on yourself
And I do all of this through a range of services including Group coaching, One on One coaching, Speaking engagements and more to come.
                     </p>
            </section>
            
            </div>
            <ContactUs formRef = {myRef} />
            <Footer />
        </>
    )
}

export default LearnMore;