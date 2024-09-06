import tellAgile from '../assets/tell-agile-big.png'
import scrum from '../assets/scrum-flex-big.png'
import sixDot from '../assets/yellow-six-dots.png'
import infoSte from '../assets/info-ste-color.png'


function Sponsor() {
    return (
        <section className='w-full py-4 px-6 bg-[#827E7E]'>
            <h3 className='text-[16px] font-[700] font-montserrat text-white text-center'>Trusted Partners</h3> 
            <div className='flex justify-around items-center'>
                <img src={scrum} className='width-[51px] h-[43px] lg:w-[92px] lg:h-[77px]' alt="" />
                <img src={sixDot} className='w-[75px] h-[23px] lg:w-[155.29px] lg:h-[44px]' alt="" />
                <img src={tellAgile} className='w-[60px] h-[53px] lg:w-[122px] lg:h-[108px]' alt="" />
                <img src={infoSte} className='w-[54px] h-[23px] lg:w-[115px] lg:h-[47px]' alt="" />
            </div>
        </section>
    )
}

export default Sponsor;