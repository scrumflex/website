import data from './data.js'
import Accordion from './Accordion.jsx'

const Faqs = () => {
    
  return (
    <div id="faqs" className=" bg-[#FEFEFE] m-8 md:py-8">
        <div className='md:w-[900px] w-full md:m-auto'>
            <h1 className=" text-[#000000] lg:text-center text-center font-bold font-montserrat lg:mt-0 lg:mb-10 lg:leading-10 text-[28px] md:text-3xl lg:text-[36px] mb-6">FAQ</h1>
                {
                data.map((item, i) => (
                <Accordion key={i} item = {item} />
                ))
                }
            
        </div>
    </div>
  )
}

export default Faqs