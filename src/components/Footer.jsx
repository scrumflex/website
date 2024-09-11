import footerImg from '../assets/scrumflex.png';
import linkedIn from '../assets/in.png';
import ig from '../assets/ig.png';
import x from '../assets/x.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="font-montserrat lg:px-16 text-[#FFFFFF] bg-[#363636]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 py-12 px-6">
            <div>
                <img src={footerImg} className='h-[75.6px] w-[113.08px] lg:h-[100px] lg:w-[150px] -ml-10 -mt-3' alt="" />
                <p className="text-[10px] lg:text-[12px] lg:w-[186px] leading-[18.84px] mb-6 text-[#FFFFFFAD]">providing effective training for all levels</p>
                <p className="text-[10px] lg:text-[12px] text-[#FFFFFFAD]">Follow on socials</p>
                <div className='flex gap-8 mt-4 mb-8 items-center '>
                    <a href="https://twitter.com/Scrum_Flex"><img className='w-[18px] h-[18px]' src={x} alt="" /></a>
                    <a href="https://www.instagram.com/scrumflex?igsh=aHZ6MGdjODFhc3Fx&utm_source=qr"><img className='w-[18px] h-[18px]' src={ig} alt="" /></a>
                    <a href="https://www.linkedin.com/company/scrumflex/"><img className='w-[18px] h-[18px]' src={linkedIn} alt="" /></a>
                </div>
            </div>
            <div className="order-2">
                <h4 className="text-[16px] mb-3">Quick Links</h4>
                <ul className="text-[10px] leading-[14.84px]">
                    <Link to="/website/"><li className="mb-2 lg:text-[12px] text-[#FFFFFFAD]">Home</li></Link> 
                    <Link to="/website/about-us/"><li className="mb-2 lg:text-[12px] text-[#FFFFFFAD]">About Us</li></Link>
                    <Link to="/website/trainings/"><li className="mb-2 lg:text-[12px] text-[#FFFFFFAD]">Trainings</li></Link>
                    <Link to="/website/faq/"><li className="mb-2 lg:text-[12px] text-[#FFFFFFAD]">Faqs</li></Link>
                </ul>
            </div>
            <div className="order-4 lg:order-3">
                <h4 className="text-[16px] mb-3">Information</h4>
                <ul className="text-[10px] leading-[14.84px]">
                    <li className="mb-2 lg:text-[12px] text-[#FFFFFFAD]">Privacy Policy</li>
                    <li className="mb-2 lg:text-[12px] text-[#FFFFFFAD]">Terms of Service</li>
                    <li className="mb-2 lg:text-[12px] text-[#FFFFFFAD]">Disclaimer</li>
                    <li className="mb-2 lg:text-[12px] text-[#FFFFFFAD]">FAQs</li>
                </ul>
            </div>
            <div className="order-3">
                <h4 className="text-[16px] mt-8 lg:mt-0 mb-3">Contact Us</h4>
                <p className="text-[10px] lg:text-[12px] text-[#FFFFFFAD]">Hello.scrumflex@gmail.com</p>
            </div>
        </div>
        <p className="text-[10px] lg:border-t-[1px] lg:py-12 lg:border-[#FFFFFF33] lg:text-[12px] text-center pt-4 pb-6 text-[#FFFFFFAD]">@{new Date().getFullYear()} Scrumflex. All right reserved</p>
    </footer>
    )
}

export default Footer;