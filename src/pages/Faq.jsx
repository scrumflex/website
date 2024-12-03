import { useRef } from "react";
import ContactUs from "../components/ContactUs";
import Faqs from "../components/faq/Faq";
import Footer from "../components/Footer";
import Navbar from "../components/Nav";

function Faq() {
    const myRef = useRef(null);
    return (
        <>
            <Navbar buttonRef = {myRef} />
            <section className="bg-[url('/students.jpg')] flex justify-center items-center bg-blend-overlay w-full bg-cover object-cover bg-black/20 bg-[50%_32%] bg-no-repeat h-[200px] lg:h-[398px]">
                <h1 className="font-montserrat text-white text-[32px] font-[700]">FAQ</h1>
            </section>
            <Faqs />
            <ContactUs formRef = {myRef} />
            <Footer />
        </>
    )
}

export default Faq;